import path from 'path'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'

import { outputEsm, outputCjs } from '../utils/path'
import { generateExternal, generatePaths } from '../utils/rollup'

export const buildModules = async () => {
  // compile
  const bundle = await rollup({
    input: path.resolve(__dirname, '../../src/index.ts'),
    plugins: [vue(), vueJsx(), nodeResolve(), esbuild({ target: 'esnext' })],
    treeshake: false,
    external: generateExternal({ full: true })
  })

  // output
  await Promise.all([
    bundle.write({
      format: 'esm',
      dir: outputEsm,
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
      entryFileNames: `[name].mjs`
    }),
    bundle.write({
      format: 'cjs',
      paths: generatePaths(),
      dir: outputCjs,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
      entryFileNames: `[name].js`
    })
  ])
}
