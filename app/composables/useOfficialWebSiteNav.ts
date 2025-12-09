// 官网导航 composable
import { OfficialWebsiteNavAPI } from '~/api/website/official-website-nav'
import type { OfficialWebsitePublicNavVO } from '~/api/website/official-website-nav/type'
import type { NavigationMenuItem } from '@nuxt/ui'

export const useOfficialWebSiteNav = () => {
  // 导航数据状态
  const navItems = ref<OfficialWebsitePublicNavVO[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // 获取导航数据
  const fetchNavs = async () => {
    loading.value = true
    error.value = null
    
    try {
      const data = await OfficialWebsiteNavAPI.getNavs();
      navItems.value = data as OfficialWebsitePublicNavVO[]
      return data
    } catch (e: any) {
      error.value = e.message || '获取导航数据失败'
      console.error('获取导航数据失败:', e)
      return []
    } finally {
      loading.value = false
    }
  }

  // 转换为 NavigationMenuItem 格式
  const transformToNavigationMenuItems = (items: OfficialWebsitePublicNavVO[]): NavigationMenuItem[] => {
    return items.map(item => {
      const menuItem: NavigationMenuItem = {
        label: item.label,
        to: item.to
      }

      // 处理 target 属性
      if (item.target) {
        menuItem.target = item.target as any
      }

      // 递归处理子菜单
      if (item.children && item.children.length > 0) {
        menuItem.children = transformToNavigationMenuItems(item.children)
      }

      return menuItem
    })
  }

  // 获取转换后的导航菜单
  const navigationMenuItems = computed<NavigationMenuItem[]>(() => {
    return transformToNavigationMenuItems(navItems.value)
  })

  // 初始化时加载数据
  onMounted(() => {
    fetchNavs()
  })

  return {
    // 原始数据
    navItems: readonly(navItems),
    // 转换后的导航菜单
    navigationMenuItems,
    // 状态
    loading: readonly(loading),
    error: readonly(error),
    // 方法
    fetchNavs,
    transformToNavigationMenuItems
  }
}