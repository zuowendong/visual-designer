export interface IComponentBase {
  id: string
  key: string
}

export interface IComponent extends IComponentBase {
  style: ICompStyle
}

export interface ICompStyle {
  width: number
  height: number
  x: number
  y: number
  [k: string]: any
}

export interface ICompStaticData {
  data: null
  events: null
  functions: null
  props: ICompProps | null
}

export interface ICompProps {
  [k: string]: {
    name: string
    open?: Boolean
    props: {
      [k: string]: {
        name: string
        compKey: string
        value: any
      }
    }
  }
}
