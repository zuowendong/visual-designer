import type { App } from 'vue'
import DuiComplexText from './dui-complex-text/ComplexText.vue'
import DuiComplexBase from './dui-complex-base/ComplexBase.vue'

const installs = [DuiComplexText, DuiComplexBase]

export default {
  install(app: App): void {
    installs.forEach((p) => {
      if (p.install) {
        app.use(p as any)
      } else {
        app.component(p.name, p)
      }
    })
  }
}
