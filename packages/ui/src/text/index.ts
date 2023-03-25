import type { App, Plugin } from 'vue'
import Text from './text'

Text.install = (app: App) => {
  app.component(Text.name, Text)
  return app
}

export default Text as typeof Text & Plugin
