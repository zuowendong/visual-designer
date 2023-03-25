import type { App, Plugin } from 'vue'
import Select from './select'

Select.install = (app: App) => {
  app.component(Select.name, Select)
  return app
}

export default Select as typeof Select & Plugin
