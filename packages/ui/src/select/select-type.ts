import type { PropType, ExtractPropTypes } from 'vue'

export type SelectOption = {
  label: String
  value: String
}

export const selectProps = {
  list: {
    type: Array as PropType<SelectOption[]>,
    required: true,
    default: (): SelectOption[] => []
  }
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>
