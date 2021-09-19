import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import InputMask from 'react-input-mask'

import { Container, Label, Icon } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string | Array<string | RegExp>
  icon?: string
  label?: string
}

// eslint-disable-next-line
const InputBase: ForwardRefRenderFunction<any, IInputProps> = (
  { label, icon, mask, ...rest },
  ref
) => {
  return (
    <Container hasIcon={!!icon}>
      {label && <Label>{label}</Label>}

      {mask ? (
        <InputMask mask={mask} maskChar={null} ref={ref} {...rest} />
      ) : (
        <input {...rest} ref={ref} />
      )}

      {icon && <Icon className={`icon-${icon}`} />}
    </Container>
  )
}

const Input = forwardRef(InputBase)

export default Input
