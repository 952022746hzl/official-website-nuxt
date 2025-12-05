<template>
  <nav class="flex" aria-label="面包屑导航">
    <ol class="flex items-center space-x-2">
      <li v-for="(link, index) in links" :key="link.to" class="flex items-center">
        <template v-if="index > 0">
          <UIcon name="i-lucide-chevron-right" class="text-gray-400 mx-2" />
        </template>
        
        <NuxtLink
          v-if="index < links.length - 1"
          :to="link.to"
          class="text-gray-600 hover:text-primary transition-colors text-sm"
        >
          {{ link.label }}
        </NuxtLink>
        
        <span
          v-else
          class="text-gray-900 dark:text-gray-100 font-medium text-sm"
          aria-current="page"
        >
          {{ link.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbLink {
  label: string
  to: string
}

defineProps<{
  links: BreadcrumbLink[]
}>()
</script>
