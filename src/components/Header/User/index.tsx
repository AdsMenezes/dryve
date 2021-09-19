import avatar from '../../../static/avatar.png'

import { Container, Avatar } from './styles'

export default function User() {
  return (
    <Container>
      <Avatar title="Anderson Menezes">
        <img src={avatar} />
      </Avatar>
    </Container>
  )
}
