<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2 min-w-0">
        <!--Logo png-->
        <img src="@/assets/logo.png" alt="Logo" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        <span class="font-bold text-lg sm:text-xl truncate">{{ appConfig.site?.name }}</span>
      </NuxtLink>
    </template>

    <template #right>
      <!-- 加载中显示骨架屏 -->
      <template v-if="loading">
        <USkeleton class="h-10 w-32" />
      </template>
      <!-- 加载错误时显示错误信息 -->
      <template v-else-if="error">
        <UTooltip :text="error">
          <UIcon name="i-heroicons-exclamation-triangle" class="text-red-500" />
        </UTooltip>
      </template>
      <!-- 正常显示导航（只有在有数据时才显示） -->
      <template v-else-if="links && links.length > 0">
        <UNavigationMenu :items="links" contentOrientation="vertical"/>
      </template>
      <UColorModeButton />
    </template>

    <template #body>
      <!-- 移动端加载中显示骨架屏 -->
      <template v-if="loading">
        <USkeleton class="h-10 w-full mb-2" v-for="i in 3" :key="i" />
      </template>
      <!-- 加载错误时显示错误信息 -->
      <template v-else-if="error">
        <div class="text-red-500 text-sm p-4">
          <UIcon name="i-heroicons-exclamation-triangle" class="mr-2" />
          {{ error }}
        </div>
      </template>
      <!-- 正常显示导航（只有在有数据时才显示） -->
      <template v-else-if="links && links.length > 0">
        <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
      </template>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import { useOfficialWebSiteNav } from '~/composables/useOfficialWebSiteNav';

const appConfig = useAppConfig()

// 使用动态导航
const { navigationMenuItems, loading, error } = useOfficialWebSiteNav()

// 直接使用动态导航数据，没有默认值
const links = computed<NavigationMenuItem[]>(() => {
  return navigationMenuItems.value || []
})
</script>
