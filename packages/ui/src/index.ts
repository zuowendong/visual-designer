import type { App } from 'vue'
import staticData from './utils'

import TreeInstall, { Tree } from './tree'
import TextInstall, { Text } from './text'
import SelectInstall, { Select } from './select'

export { Tree, Text, Select, staticData }

const installs = [TreeInstall, TextInstall, SelectInstall]

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
