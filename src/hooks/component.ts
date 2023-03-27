import type { IComponent } from '@/types'
import { genCompId } from '@/utils/tools'

export function useComponent() {
  function compDataFactory({ name, key }: IComponent): IComponent {
    return {
      id: genCompId(),
      name,
      key
    }
  }

  return {
    compDataFactory
  }
}
