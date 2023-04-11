import type { App } from 'vue'
import { formatPropType } from './prop-type'
import { PropertyData } from '../env'

type OptionsData = {
  component: any
  properties?: PropertyData[]
}

class StaticData {
  constructor(private component: any = 'unkonow') {}

  async setStaticData(options: OptionsData) {
    const { component, properties } = options

    component.install = function (app: App): void {
      app.component(component.name, component)
    }

    component.staticData = {
      props: properties ? formatPropType(properties) : null
    }

    this.component = component
  }

  getStaticData() {
    const { name, ...params } = this.component
    return {
      [name]: params.staticData
    }
  }

  async getJsonDataArray() {
    const files = import.meta.glob('../**/build.json')
    const dataArray = []
    for (const filePath in files) {
      // eslint-disable-next-line no-prototype-builtins
      if (files.hasOwnProperty(filePath)) {
        const file = files[filePath]
        const module: any = await file()
        const data = module.default
        dataArray.push(data)
      }
    }
    return dataArray
  }
}

export default StaticData
