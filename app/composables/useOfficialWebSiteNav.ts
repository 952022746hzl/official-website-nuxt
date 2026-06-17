// 官网导航 composable
import { OfficialWebsiteNavAPI } from '~/api/website/official-website-nav'
import type { OfficialWebsitePublicNavVO } from '~/api/website/official-website-nav/type'
import type { NavigationMenuItem } from '@nuxt/ui'

export const useOfficialWebSiteNav = () => {
  // SSR 阶段取数，使导航进入首屏 HTML（SEO 可爬取，避免客户端水合前空白）
  const { data, pending, error, refresh } = useAsyncData<OfficialWebsitePublicNavVO[]>(
    'official-website-nav',
    () => OfficialWebsiteNavAPI.getNavs(),
    { default: () => [] }
  )

  // 防御性规范化内部路由：缺前导斜杠则补上（与后端 NavLinkNormalizer 镜像）
  const normalizeTo = (to?: string): string | undefined => {
    if (!to) return to
    if (/^https?:\/\//.test(to) || to.startsWith('/') || to.startsWith('#')) return to
    return '/' + to
  }

  // 转换为 NavigationMenuItem 格式
  const transformToNavigationMenuItems = (
    items: OfficialWebsitePublicNavVO[]
  ): NavigationMenuItem[] => {
    return items.map((item) => {
      const menuItem: NavigationMenuItem = {
        label: item.label,
      }

      // 分组目录(type=3) 后端返回 to 为空 -> 不设 to，渲染为不可点击的下拉触发器
      const to = normalizeTo(item.to)
      if (to) {
        menuItem.to = to
      }

      // 打开方式 + 外链安全/SEO rel
      if (item.target) {
        menuItem.target = item.target as any
        if (item.target === '_blank') {
          ;(menuItem as any).rel = 'noopener noreferrer'
        }
      }

      // 递归子菜单
      if (item.children && item.children.length > 0) {
        menuItem.children = transformToNavigationMenuItems(item.children)
      }

      return menuItem
    })
  }

  const navigationMenuItems = computed<NavigationMenuItem[]>(() => {
    return transformToNavigationMenuItems(data.value || [])
  })

  return {
    // 原始数据
    navItems: data,
    // 转换后的导航菜单
    navigationMenuItems,
    // 状态（保持与 AppHeader 既有解构兼容）
    loading: pending,
    error: computed(() => (error.value ? error.value.message || '获取导航数据失败' : null)),
    // 方法
    fetchNavs: refresh,
    transformToNavigationMenuItems,
  }
}
