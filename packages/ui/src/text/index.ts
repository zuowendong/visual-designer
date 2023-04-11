import type { App } from 'vue'
import staticData from '../utils'

import Text from './text'
import { properties } from './prop'

staticData.setStaticData({
  component: Text,
  properties
})

export { Text }

export default {
  install(app: App): void {
    app.use(Text as any)
  }
}
