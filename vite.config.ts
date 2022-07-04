import { URL, fileURLToPath } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetWind } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss({
      presets: [presetWind(), presetAttributify(), presetIcons()],
      rules: [
        // 设置规则
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // 关闭选项api，降低打包体积
    __VUE_OPTIONS_API__: false
  },
  server: {
    proxy: {
      '/api': {
        // 匹配到了api前面加上这串路径
        target: loadEnv(mode, process.cwd()).VITE_APP_URL,
        changeOrigin: true,
        // 并把/api去掉
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}))
