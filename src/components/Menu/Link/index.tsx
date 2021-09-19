import { NavLinkProps } from 'react-router-dom'

import { Container, Icon, Label } from './styles'

interface ILinkProps extends NavLinkProps {
  icon: string
  label: string
}

export default function Link({ icon, label, ...rest }: ILinkProps) {
  return (
    <Container activeClassName="active" title={label} {...rest}>
      <Icon className={`icon-${icon}`} />
      <Label>{label}</Label>
    </Container>
  )
}
