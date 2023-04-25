import type { App } from 'vue'
import DuiComplexText from './dui-complex-text/ComplexText.vue'
import DuiComplexBase from './dui-complex-base/ComplexBase.vue'
import DuiInputText from './dui-input-text/InputText.vue'
import DuiInputNumber from './dui-input-number/InputNumber.vue'
import DuiGroupNumber from './dui-group-number/GroupNumber.vue'
import DuiColorPicker from './dui-color-picker/ColorPicker.vue'
import DuiCheckboxText from './dui-checkbox-text/CheckboxText.vue'
import DuiGroupSlider from './dui-group-slider/GroupSlider.vue'

const installs = [
  DuiComplexText,
  DuiComplexBase,
  DuiInputText,
  DuiInputNumber,
  DuiGroupNumber,
  DuiColorPicker,
  DuiCheckboxText,
  DuiGroupSlider
]

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
