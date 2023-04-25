import type { App } from 'vue'
import staticData from './utils'

import TextInstall, { Text } from './text'
import SelectInstall, { Select } from './select'
import ChartbarInstall, { Chartbar } from './chartbar'
import ChartpieInstall, { Chartpie } from './chartpie'

export { staticData, Text, Select, Chartbar, Chartpie }

const installs = [TextInstall, SelectInstall, ChartbarInstall, ChartpieInstall]

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
