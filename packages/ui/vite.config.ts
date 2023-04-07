import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './src',
      outputDir: 'es/types',
      insertTypesEntry: true,
      skipDiagnostics: true,
      tsConfigFilePath: './tsconfig.json'
    })
  ],
  build: {
    target: 'modules',
    outDir: 'es',
    rollupOptions: {
      external: ['vue', /\.scss/],
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
      entry: 'src/index.ts',
      formats: ['es']
    }
  }
})
