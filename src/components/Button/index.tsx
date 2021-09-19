import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'white'
  children: React.ReactNode
}

export default function Button({ color, children, ...rest }: IButtonProps) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  )
}
