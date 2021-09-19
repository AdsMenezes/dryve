import {
  SelectHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

import { Container, Label, Icon } from './styles'

interface IOption {
  value: string | number
  label: string
}
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: IOption[]
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, ISelectProps> = (
  { label, options, ...rest },
  ref
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <select ref={ref} {...rest}>
        {options.length &&
          options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>

      <Icon className="icon-arrow-down" />
    </Container>
  )
}

const Select = forwardRef(SelectBase)

export default Select
