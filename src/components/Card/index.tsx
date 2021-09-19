import { Container, Title, Content } from './styles'

interface ICardProps {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: ICardProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Container>
  )
}
