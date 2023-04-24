import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './src',
      outputDir: 'es',
      insertTypesEntry: true,
      skipDiagnostics: true,
      tsConfigFilePath: './tsconfig.json'
    }),
    visualizer({ open: true })
  ],
  build: {
    target: 'modules',
    outDir: 'es',
    rollupOptions: {
      external: ['vue'],
      input: './src/index.ts',
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      name: 'ui',
      entry: 'src/index.ts'
    }
  }
})
