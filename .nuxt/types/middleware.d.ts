import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/danielchua/Documents/yum/tjghiv2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}