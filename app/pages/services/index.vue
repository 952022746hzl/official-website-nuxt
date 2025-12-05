<template>
  <div>
    <!-- 页面头部 -->
    <UPageHero
      title="我们的服务"
      description="专业的技术团队，为您提供全方位的解决方案"
    />

    <!-- 服务列表 -->
    <UPageSection>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="service in services" :key="service.id" class="hover:shadow-lg transition-shadow">
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon :name="service.icon" class="text-2xl text-primary" />
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            </div>
          </template>
          
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.description }}</p>
          
          <div class="space-y-2 mb-4">
            <div v-for="feature in service.features" :key="feature" class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500 text-sm" />
              <span class="text-sm">{{ feature }}</span>
            </div>
          </div>
          
          <template #footer>
            <UButton 
              :to="`/services/${service.id}`" 
              variant="outline" 
              block
              trailing-icon="i-lucide-arrow-right"
            >
              了解详情
            </UButton>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- CTA 区域 -->
    <UPageSection>
      <UPageCTA
        title="准备开始您的项目了吗？"
        description="联系我们的专业团队，获取免费咨询和项目评估"
        :links="[{
          label: '免费咨询',
          to: '/contact',
          color: 'primary'
        }]"
      />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
// SEO 设置
useSeoMeta({
  title: '我们的服务 - 公司官方网站',
  description: '专业的技术团队，为您提供全方位的解决方案，包括软件开发、系统集成、技术咨询等服务'
})

// 服务数据
const services = [
  {
    id: 'software-development',
    title: '软件开发',
    icon: 'i-lucide-code',
    description: '定制化软件解决方案，从需求分析到部署维护的全流程服务',
    features: [
      'Web 应用开发',
      '移动应用开发',
      'API 接口开发'
    ]
  },
  {
    id: 'system-integration',
    title: '系统集成',
    icon: 'i-lucide-network',
    description: '企业级系统集成服务，实现不同系统间的无缝连接',
    features: [
      'ERP 系统集成',
      'CRM 系统对接',
      '数据同步方案'
    ]
  },
  {
    id: 'cloud-services',
    title: '云服务',
    icon: 'i-lucide-cloud',
    description: '专业的云计算服务，助力企业数字化转型',
    features: [
      '云架构设计',
      '云迁移服务',
      '云运维管理'
    ]
  }
]
</script>
