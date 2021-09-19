import Button from '../../Button'

import { Container, Icon } from './styles'

export default function Setting() {
  return (
    <Container>
      <Button title="Configurações">
        <Icon className="icon-gear" />
      </Button>
    </Container>
  )
}
