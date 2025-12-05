<template>
  <div>
    <!-- 面包屑导航 -->
    <AppBreadcrumb :links="breadcrumbLinks" class="mb-8" />

    <!-- 服务详情头部 -->
    <UPageHero
      v-if="service"
      :title="service.title"
      :description="service.description"
    >
      <template #links>
        <UButton 
          to="/contact" 
          color="primary"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
        >
          立即咨询
        </UButton>
        <UButton 
          to="/services" 
          variant="outline"
          size="xl"
        >
          返回服务列表
        </UButton>
      </template>
    </UPageHero>

    <!-- 404 页面 -->
    <div v-else class="text-center py-20">
      <UIcon name="i-lucide-search-x" class="text-6xl text-gray-400 mb-4" />
      <h1 class="text-2xl font-bold mb-2">服务未找到</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">抱歉，您访问的服务页面不存在</p>
      <UButton to="/services" trailing-icon="i-lucide-arrow-right">
        查看所有服务
      </UButton>
    </div>

    <template v-if="service">
      <!-- 服务特色 -->
      <UPageSection>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">服务特色</h2>
            <div class="space-y-4">
              <div v-for="feature in service.detailedFeatures" :key="feature.title" class="flex gap-4">
                <div class="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <UIcon :name="feature.icon" class="text-xl text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
            <div class="space-y-6">
              <div class="text-center">
                <UIcon :name="service.icon" class="text-6xl text-primary mb-4" />
                <h3 class="text-xl font-semibold">{{ service.title }}</h3>
              </div>
              <div class="grid grid-cols-2 gap-4 text-center">
                <div v-for="stat in service.stats" :key="stat.label">
                  <div class="text-2xl font-bold text-primary">{{ stat.value }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UPageSection>

      <!-- CTA 区域 -->
      <UPageSection>
        <UPageCTA
          :title="`对${service.title}感兴趣？`"
          description="联系我们的专业团队，获取详细的解决方案和报价"
          :links="[{
            label: '立即咨询',
            to: '/contact',
            color: 'primary'
          }]"
        />
      </UPageSection>
    </template>
  </div>
</template>

<script setup lang="ts">
// 获取路由参数
const route = useRoute()
const serviceId = route.params.id as string

// 服务详细数据
const servicesData = {
  'software-development': {
    id: 'software-development',
    title: '软件开发',
    icon: 'i-lucide-code',
    description: '定制化软件解决方案，从需求分析到部署维护的全流程服务',
    detailedFeatures: [
      {
        title: 'Web 应用开发',
        icon: 'i-lucide-globe',
        description: '响应式 Web 应用，支持多平台访问，采用现代化前端技术栈'
      },
      {
        title: '移动应用开发',
        icon: 'i-lucide-smartphone',
        description: '原生和跨平台移动应用开发，支持 iOS 和 Android 平台'
      },
      {
        title: '后端 API 开发',
        icon: 'i-lucide-server',
        description: '高性能、可扩展的后端服务和 RESTful API 接口'
      }
    ],
    stats: [
      { label: '项目经验', value: '200+' },
      { label: '客户满意度', value: '99%' },
      { label: '平均交付时间', value: '30天' },
      { label: '技术专家', value: '15+' }
    ]
  },
  'system-integration': {
    id: 'system-integration',
    title: '系统集成',
    icon: 'i-lucide-network',
    description: '企业级系统集成服务，实现不同系统间的无缝连接',
    detailedFeatures: [
      {
        title: 'ERP 系统集成',
        icon: 'i-lucide-building',
        description: '企业资源规划系统的集成和定制化开发'
      },
      {
        title: 'API 接口对接',
        icon: 'i-lucide-plug',
        description: '第三方系统 API 接口的对接和数据同步'
      }
    ],
    stats: [
      { label: '集成项目', value: '150+' },
      { label: '系统稳定性', value: '99.9%' },
      { label: '数据准确率', value: '100%' },
      { label: '响应时间', value: '<2h' }
    ]
  },
  'cloud-services': {
    id: 'cloud-services',
    title: '云服务',
    icon: 'i-lucide-cloud',
    description: '专业的云计算服务，助力企业数字化转型',
    detailedFeatures: [
      {
        title: '云架构设计',
        icon: 'i-lucide-layers',
        description: '设计高可用、可扩展的云架构解决方案'
      },
      {
        title: '云迁移服务',
        icon: 'i-lucide-upload-cloud',
        description: '安全可靠的云迁移服务，最小化业务中断'
      }
    ],
    stats: [
      { label: '云项目', value: '100+' },
      { label: '迁移成功率', value: '100%' },
      { label: '性能提升', value: '300%' },
      { label: '成本节省', value: '40%' }
    ]
  }
}

// 获取当前服务数据
const service = computed(() => servicesData[serviceId as keyof typeof servicesData] || null)

// 面包屑导航
const breadcrumbLinks = computed(() => [
  { label: '首页', to: '/' },
  { label: '服务', to: '/services' },
  { label: service.value?.title || '未知服务', to: route.path }
])

// SEO 设置
useSeoMeta({
  title: () => service.value ? `${service.value.title} - 公司官方网站` : '服务未找到',
  description: () => service.value?.description || '服务页面未找到'
})

// 如果服务不存在，设置 404 状态
if (!service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '服务未找到'
  })
}
</script>
