<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <UIcon name="i-lucide-building-2" class="text-2xl text-primary" />
        <span class="font-bold text-xl">{{ appConfig.site?.name }}</span>
      </NuxtLink>
    </template>

    <template #right>
      <nav class="flex items-center gap-6">
        <ULink 
          v-for="link in links" 
          :key="link.label"
          :to="link.to"
          class="text-sm font-medium hover:text-primary transition-colors"
        >
          {{ link.label }}
        </ULink>
      </nav>
      
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

const links = [
  {
    label: '首页',
    to: '/'
  },
  {
    label: '服务',
    to: '/services'
  },
  {
    label: '关于我们',
    to: '#about'
  },
  {
    label: '联系我们',
    to: '/contact'
  }
]
</script>
