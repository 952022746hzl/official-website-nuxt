<template>
  <div>
    <!-- 英雄区域 -->
    <UPageHero
      title="欢迎来到我们公司"
      description="我们致力于为客户提供优质的产品和服务，以创新技术推动行业发展，成为您值得信赖的合作伙伴。"
      :links="[{
        label: '了解更多',
        to: '#about',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: '联系我们',
        to: '#contact',
        icon: 'i-lucide-phone',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <!-- 服务介绍 -->
    <UPageSection
      id="services"
      title="我们的核心服务"
      description="凭借多年的行业经验和专业技术团队，我们为客户提供全方位的解决方案。"
      :features="[{
        icon: 'i-lucide-lightbulb',
        title: '技术创新',
        description: '持续投入研发，运用最新技术为客户打造前沿的产品和解决方案，保持行业领先地位。'
      }, {
        icon: 'i-lucide-users',
        title: '专业团队',
        description: '拥有经验丰富的专业团队，为每个项目提供个性化的服务和技术支持。'
      }, {
        icon: 'i-lucide-award',
        title: '品质保证',
        description: '严格的质量管控体系，确保每一个产品和服务都达到最高标准。'
      }, {
        icon: 'i-lucide-clock',
        title: '快速响应',
        description: '7x24小时客户服务，快速响应客户需求，提供及时有效的技术支持。'
      }, {
        icon: 'i-lucide-globe',
        title: '全球服务',
        description: '覆盖全球的服务网络，为世界各地的客户提供本地化的专业服务。'
      }, {
        icon: 'i-lucide-shield-check',
        title: '安全可靠',
        description: '采用业界领先的安全技术和标准，确保客户数据和系统的安全性。'
      }]"
    />

    <!-- 关于我们 -->
    <UPageSection id="about">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4">关于我们</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            我们是一家专注于技术创新的现代化企业，成立以来始终坚持以客户为中心的服务理念。
            通过不断的技术创新和服务优化，我们已经成为行业内的知名品牌。
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500" />
              <span>10+ 年行业经验</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500" />
              <span>1000+ 成功案例</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500" />
              <span>50+ 专业团队成员</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500" />
              <span>24/7 客户服务支持</span>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8">
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">年行业经验</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400">1000+</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">成功项目</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">团队成员</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">99%</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- 客户评价 -->
    <UPageSection>
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">客户评价</h2>
        <p class="text-gray-600 dark:text-gray-300">听听我们的客户怎么说</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <UCard>
          <div class="space-y-4">
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-star" class="text-yellow-400" v-for="i in 5" :key="i" />
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "服务非常专业，团队响应速度很快，项目按时高质量完成。强烈推荐！"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar src="https://i.pravatar.cc/150?img=1" alt="客户头像" />
              <div>
                <div class="font-semibold">张先生</div>
                <div class="text-sm text-gray-500">某科技公司 CEO</div>
              </div>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-4">
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-star" class="text-yellow-400" v-for="i in 5" :key="i" />
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "技术实力雄厚，解决方案很有创新性，合作过程非常愉快。"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar src="https://i.pravatar.cc/150?img=2" alt="客户头像" />
              <div>
                <div class="font-semibold">李女士</div>
                <div class="text-sm text-gray-500">某制造企业 CTO</div>
              </div>
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-4">
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-star" class="text-yellow-400" v-for="i in 5" :key="i" />
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "从咨询到实施，整个过程都很顺利。产品质量超出预期！"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar src="https://i.pravatar.cc/150?img=3" alt="客户头像" />
              <div>
                <div class="font-semibold">王先生</div>
                <div class="text-sm text-gray-500">某金融机构 总监</div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- 联系我们 -->
    <UPageSection id="contact">
      <UPageCTA
        title="准备开始合作了吗？"
        description="联系我们，让我们一起探讨如何为您的业务创造更大价值。我们的专业团队随时为您提供咨询服务。"
        variant="subtle"
        :links="[{
          label: '立即咨询',
          to: 'tel:400-123-4567',
          trailingIcon: 'i-lucide-phone',
          color: 'primary'
        }, {
          label: '发送邮件',
          to: 'mailto:contact@company.com',
          icon: 'i-lucide-mail',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
