export interface IComponent {
  id: string
  name?: string
  key: string
  style?: ICompStyle
}

export interface ICompStyle {
  width: number
  height: number
  x: number
  y: number
  [k: string]: any
}
