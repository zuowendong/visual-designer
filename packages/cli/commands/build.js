const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')

const entryDir = path.resolve(__dirname, '../../ui')
const outputDir = path.resolve(__dirname, '../../ui/dist')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'index.ts'),
          name: 'designer-ui',
          fileName: 'designer-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

async function buildSingle(name) {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
}

function createPackageJson(name) {
  const fileStr = `{
		"name": "${name}",
		"version": "0.0.0",
		"main": "index.umd.js",
		"module": "index.mjs",
		"style": "style.css"
	}`

  fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
}

const buildLib = async () => {
  await buildAll()

  const components = fsExtra.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fsExtra.lstatSync(componentDir).isDirectory()
    return isDir && fsExtra.readdirSync(componentDir).includes('index.ts')
  })

  for (const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}
buildLib()
