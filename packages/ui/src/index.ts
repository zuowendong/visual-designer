import type { App } from 'vue'
import staticData from './utils'

import TextInstall, { Text } from './text'
import SelectInstall, { Select } from './select'
import ChartbarInstall, { Chartbar } from './chartbar'

export { staticData, Text, Select, Chartbar }

const installs = [TextInstall, SelectInstall, ChartbarInstall]

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
