<template>
  <UFooter>
    <template #left>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-building-2" class=" text-primary" />
        <span class="font-semibold">{{ appConfig.site?.name  }}</span>
      </div>
    </template>

    <template #right>
      <div class="flex flex-col sm:flex-row gap-4 text-sm">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-phone" class="text-primary" />
          <span>{{ appConfig.contact?.phone  }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-mail" class="text-primary" />
          <span>{{ appConfig.contact?.email  }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-map-pin" class="text-primary" />
          <span>{{ appConfig.contact?.address  }}</span>
        </div>
      </div>
    </template>

    <template #bottom>
      <div class="text-center space-y-3">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          © {{ new Date().getFullYear() }} {{ appConfig.site?.name }}. 版权所有.
        </p>
        <div class="flex justify-center gap-6">
          <ULink 
            to="#" 
            class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            隐私政策
          </ULink>
          <ULink 
            to="#" 
            class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            服务条款
          </ULink>
        </div>
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
