import Button from '../../Button'

import { Container, Icon, Alert } from './styles'

export default function Notification() {
  return (
    <Container>
      <Button title="Notificações">
        <Icon className="icon-bell">
          <Alert className="alert" />
        </Icon>
      </Button>
    </Container>
  )
}
