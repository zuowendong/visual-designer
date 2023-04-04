import type { App } from 'vue'
import Text from './src/text'

Text.install = function (app: App): void {
  app.component(Text.name, Text)
}

export { Text }

export default {
  title: '文字标签',
  category: '通用',
  install(app: App): void {
    app.use(Text as any)
  }
}
