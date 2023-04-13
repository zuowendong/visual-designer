import type { App } from 'vue'
import staticData from './utils'

import TextInstall, { Text } from './text'
import SelectInstall, { Select } from './select'

export { Text, Select, staticData }

const installs = [TextInstall, SelectInstall]

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
