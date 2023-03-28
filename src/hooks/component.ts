import type { IComponent } from '@/types'
import { genCompId } from '@/utils/tools'

export interface ICompFactory {
  key: string
  width: number
  height: number
  x: number
  y: number
}

export function useComponent() {
  function compDataFactory({ key, width, height, x, y }: ICompFactory): IComponent {
    return {
      id: genCompId(),
      key,
      style: {
        width,
        height,
        x,
        y
      }
    }
  }

  return {
    compDataFactory
  }
}
