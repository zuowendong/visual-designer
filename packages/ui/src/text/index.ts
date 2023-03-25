import type { App, Plugin } from 'vue'
import Text from './text.vue'

Text.install = (app: App) => {
  app.component(Text.name, Text)
  return app
}

export default Text as typeof Text & Plugin
