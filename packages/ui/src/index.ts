import type { App } from 'vue'
import TreeInstall, { Tree } from './tree'
import TextInstall, { Text } from './text'

export { Tree, Text }

const installs = [TreeInstall, TextInstall]

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
