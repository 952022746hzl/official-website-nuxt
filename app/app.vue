<script setup>
import favicon from '~/assets/favicon.ico'

const appConfig = useAppConfig()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: favicon }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  }
})

const title = appConfig.site?.name 
const description = appConfig.site?.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

// 配置 toast 位置为右上角
const toaster = { position: 'top-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
