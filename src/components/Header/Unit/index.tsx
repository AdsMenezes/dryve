import Button from '../../Button'

import { Container, Icon } from './styles'

export default function Unit() {
  return (
    <Container>
      <Button title="DryveOne - Frederico Boeri">
        <Icon className="icon icon-house" />
        <span className="mx-2">DryveOne - Frederico Boeri</span>
        <Icon className="icon icon-arrow-down" />
      </Button>
    </Container>
  )
}
