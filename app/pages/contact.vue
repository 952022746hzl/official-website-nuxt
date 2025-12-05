<template>
  <div>
    <!-- 页面头部 -->
    <UPageHero
      title="联系我们"
      description="我们随时为您提供专业的咨询服务，期待与您的合作"
    />

    <!-- 联系信息和表单 -->
    <UPageSection>
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- 联系信息 -->
        <div>
          <h2 class="text-2xl font-bold mb-6">联系方式</h2>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 rounded-lg p-3">
                <UIcon name="i-lucide-phone" class="text-xl text-primary" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">电话咨询</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ appConfig.contact?.phone }}</p>
                <p class="text-sm text-gray-500">工作日 9:00-18:00</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-primary/10 rounded-lg p-3">
                <UIcon name="i-lucide-mail" class="text-xl text-primary" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">邮箱联系</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ appConfig.contact?.email }}</p>
                <p class="text-sm text-gray-500">24小时内回复</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-primary/10 rounded-lg p-3">
                <UIcon name="i-lucide-map-pin" class="text-xl text-primary" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">公司地址</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ appConfig.contact?.address }}</p>
                <p class="text-sm text-gray-500">欢迎预约拜访</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 联系表单 -->
        <div>
          <h2 class="text-2xl font-bold mb-6">在线咨询</h2>
          <UCard>
            <UForm :schema="schema" :state="state" @submit="onSubmit">
              <div class="space-y-4">
                <UFormGroup label="姓名" name="name">
                  <UInput v-model="state.name" placeholder="请输入您的姓名" />
                </UFormGroup>

                <UFormGroup label="邮箱" name="email">
                  <UInput v-model="state.email" type="email" placeholder="请输入您的邮箱" />
                </UFormGroup>

                <UFormGroup label="电话" name="phone">
                  <UInput v-model="state.phone" placeholder="请输入您的电话" />
                </UFormGroup>

                <UFormGroup label="咨询服务" name="service">
                  <USelect 
                    v-model="state.service" 
                    :options="serviceOptions" 
                    placeholder="请选择咨询的服务"
                  />
                </UFormGroup>

                <UFormGroup label="留言内容" name="message">
                  <UTextarea 
                    v-model="state.message" 
                    placeholder="请详细描述您的需求..."
                    :rows="4"
                  />
                </UFormGroup>

                <UButton type="submit" color="primary" block :loading="pending">
                  提交咨询
                </UButton>
              </div>
            </UForm>
          </UCard>
        </div>
      </div>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
// SEO 设置
useSeoMeta({
  title: '联系我们 - 公司官方网站',
  description: '联系我们获取专业的技术咨询服务，我们的专业团队随时为您提供支持'
})

const appConfig = useAppConfig()

// 简单的表单验证
const schema = {
  name: { required: true, minLength: 2 },
  email: { required: true, type: 'email' },
  phone: { required: true, minLength: 11 },
  service: { required: true },
  message: { required: true, minLength: 10 }
}

// 表单状态
const state = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

// 服务选项
const serviceOptions = [
  { label: '软件开发', value: 'software-development' },
  { label: '系统集成', value: 'system-integration' },
  { label: '云服务', value: 'cloud-services' },
  { label: '技术咨询', value: 'technical-consulting' },
  { label: '其他', value: 'other' }
]

// 提交状态
const pending = ref(false)

// 表单提交处理
async function onSubmit() {
  pending.value = true
  
  try {
    // 这里可以添加实际的表单提交逻辑
    await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟提交
    
    // 显示成功消息
    const toast = useToast()
    toast.add({
      title: '提交成功',
      description: '我们已收到您的咨询，将在24小时内回复您',
      color: 'success'
    })
    
    // 重置表单
    Object.assign(state, {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: '提交失败',
      description: '请稍后重试或直接联系我们',
      color: 'error'
    })
  } finally {
    pending.value = false
  }
}
</script>
