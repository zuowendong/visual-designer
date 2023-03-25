import path from 'path'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild, { minify } from 'rollup-plugin-esbuild'

import { output } from '../utils/path'
import { generateExternal } from '../utils/rollup'

export const buildFull = async () => {
  // compile
  const bundle = await rollup({
    input: path.resolve(__dirname, '../../src/index.ts'),
    plugins: [
      vue(),
      vueJsx(),
      nodeResolve(),
      esbuild({ target: 'esnext', sourceMap: false, treeShaking: true }),
      minify({ target: 'esnext', sourceMap: false })
    ],
    treeshake: true,
    external: generateExternal({ full: false })
  })

  // output
  await Promise.all([
    bundle.write({
      format: 'esm',
      file: path.resolve(output, `index.es.js`),
      exports: undefined,
      sourcemap: false
    }),
    bundle.write({
      format: 'umd',
      file: path.resolve(output, `index.umd.js`),
      exports: 'named',
      sourcemap: false,
      name: '@designer/ui',
      globals: {
        vue: 'Vue'
      }
    })
  ])
}
