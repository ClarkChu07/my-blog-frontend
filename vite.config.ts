import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import pkg from './package.json'

const { resolve } = require('path')

const root = process.cwd()

function resovePath(paths: string) {
  // 如果 __dirname 找不到 需要 yarn add @types/node --save-dev
  return path.resolve(__dirname, paths);
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      '@config': resovePath('./config'),
      "@components": resovePath('./src/components'),
      '@utils': resovePath('./src/utils'),
    }
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://127:0.0.1:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  },
  build: {
    minify: 'esbuild',
    target: 'es2015',
    outDir: 'dist',
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  },
  define: {
    // setting vue-i18-next
    // Suppress warning
    __VUE_I18N_LEGACY_API__: false,
    __VUE_I18N_FULL_INSTALL__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,

    __APP_INFO__: JSON.stringify(__APP_INFO__)
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css` // 按需引入样式
          }
        }
      ]
    })
  ]
})
