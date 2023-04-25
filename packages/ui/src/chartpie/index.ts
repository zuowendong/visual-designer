import type { App } from 'vue'
import staticData from '../utils'

import Chartpie from './chartpie'
import { properties } from './prop'

staticData.setStaticData({
  component: Chartpie,
  properties
})

export { Chartpie }

export default {
  install(app: App): void {
    app.use(Chartpie as any)
  }
}
