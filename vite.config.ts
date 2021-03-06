import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue','vue-router'],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
    })
 ],
 resolve:{
    alias:{
        '@': path.resolve(__dirname,'src'),
    },
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'elementlib',
      fileName: (format) => `elementlib.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        'element-plus',
     ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

