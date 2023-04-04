export interface IComponentMenu {
  id: string
  name?: string
  key: string
}

export interface IComponent extends IComponentMenu {
  style: ICompStyle
}

export interface ICompStyle {
  width: number
  height: number
  x: number
  y: number
  [k: string]: any
}
