import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

import { Container, Label } from './styles'

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const RadioBase: ForwardRefRenderFunction<HTMLInputElement, IRadioProps> = (
  { label, ...rest },
  ref
) => {
  return (
    <Container>
      <input type="radio" ref={ref} {...rest} />
      <Label>{label}</Label>
    </Container>
  )
}

const Radio = forwardRef(RadioBase)

export default Radio
