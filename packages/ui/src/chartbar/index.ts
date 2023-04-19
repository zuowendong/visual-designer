import type { App } from 'vue'
import staticData from '../utils'

import Chartbar from './chartbar'
import { properties } from './prop'

staticData.setStaticData({
  component: Chartbar,
  properties
})

export { Chartbar }

export default {
  install(app: App): void {
    app.use(Chartbar as any)
  }
}
