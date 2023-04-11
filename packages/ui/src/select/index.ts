import type { App } from 'vue'
import staticData from '../utils'

import Select from './select'
import { properties } from './prop'

staticData.setStaticData({
  component: Select,
  properties
})

export { Select }

export default {
  install(app: App): void {
    app.use(Select as any)
  }
}
