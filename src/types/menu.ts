import { IComponentBase } from './component'

export interface IMenu extends IComponentBase {
  name: string
  categoryName: string
  category: string
}
