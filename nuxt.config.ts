// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  // 关闭主题切换，固定为亮色主题
  ui: {
    colorMode: false
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      appEnv: process.env.NUXT_PUBLIC_APP_ENV
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { isr: true },
    '/contact': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
