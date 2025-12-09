import { ApiCodeEnum } from "~/api/code-enum"

// API 响应基础类型 - 通用响应体格式
export interface ApiResponse<T = any> {
  /** 响应码，字符串类型，如 "200" 表示成功 */
  code: string
  /** 响应数据 */
  data: T
  /** 响应消息 */
  msg: string
}

// API 错误类型
export interface ApiError {
  code: string
  msg: string
  details?: any
}

// 请求配置类型
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  params?: Record<string, any>
  data?: any
  timeout?: number
  baseURL?: string
  onUploadProgress?: (progressEvent: any) => void
  responseType?: 'json' | 'blob' | 'text'
}

// 统一请求方法
const request = async <T = any, R = any>(
  url: string, 
  options: RequestConfig = {}
): Promise<R> => {
  // 在请求时获取配置，而不是在模块加载时
  const config = useRuntimeConfig()
  
  // 基础配置 - 使用 apiBaseUrl（与 nuxt.config.ts 中的配置名一致）
  const defaults = {
    baseURL: config.public.apiBaseUrl || '/api/v1',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const { 
    method = 'GET',
    headers = {},
    params,
    data,
    baseURL,
    responseType = 'json',
    onUploadProgress,
    ...restOptions
  } = options

  // 请求拦截器 - 处理 token
  const onRequest = ({ options }: any) => {
    // $fetch 的 onRequest 接收 { options } 格式
    // 处理 token
    const token = useCookie('auth-token').value
    if (token && options.headers?.Authorization !== 'no-auth') {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`
      }
    }
    
    // 移除 no-auth 标记
    if (options.headers?.Authorization === 'no-auth') {
      delete options.headers.Authorization
    }
  }

  // 响应拦截器
  const onResponse = ({ response }: any) => {
    const responseData = response._data
    
    if (responseData && typeof responseData === 'object' && 'code' in responseData) {
      if (responseData.code === ApiCodeEnum.SUCCESS) {
        response._data = responseData.data
        return
      }

      // 业务错误，抛出错误
      throw createError({
        statusCode: parseInt(responseData.code) || 500,
        statusMessage: responseData.msg || '请求失败',
        data: responseData.data
      })
    }
  }

  // 错误处理
  const onResponseError = (error: any) => {
    const { response } = error
    
    if (response?.status === 401) {
      // 处理认证错误
      navigateTo('/login')
    }
    
    // 优先使用响应体中的 msg，其次使用 message，最后使用默认错误信息
    const errorMessage = response?._data?.msg || response?._data?.message || error.message || '请求失败'
    
    throw createError({
      statusCode: response?.status || 500,
      statusMessage: errorMessage
    })
  }

  // 构建请求选项
  const fetchOptions: any = {
    ...defaults,
    ...restOptions,
    method,
    baseURL: baseURL || defaults.baseURL,
    headers: {
      ...defaults.headers,
      ...headers
    }
  }

  // 处理请求参数
  if (method === 'GET' && params) {
    fetchOptions.query = params
  } else if (params) {
    fetchOptions.params = params
  }

  // 处理请求体
  if (data) {
    if (data instanceof FormData) {
      delete fetchOptions.headers['Content-Type']
      fetchOptions.body = data
    } else {
      fetchOptions.body = data
    }
  }

  // 添加拦截器
  fetchOptions.onRequest = onRequest
  fetchOptions.onResponse = onResponse
  fetchOptions.onResponseError = onResponseError

  // 处理响应类型
  if (responseType === 'blob') {
    fetchOptions.responseType = 'blob'
  }

  // 执行请求
  try {
    const response = await $fetch<R>(url, fetchOptions)
    return response
  } catch (error) {
    throw error
  }
}

// 导出请求函数
export default request
