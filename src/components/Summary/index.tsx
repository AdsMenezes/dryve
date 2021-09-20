import { Container, Content, Icon, Value } from './styles'

interface ISummaryProps {
  title: string
  icon: string
  value: string
}

export default function Summary({ title, icon, value }: ISummaryProps) {
  return (
    <Container>
      <h3>{title}</h3>
      <Content>
        <Value>{value}</Value>
        <Icon className={`icon-${icon}`} />
      </Content>
    </Container>
  )
}
