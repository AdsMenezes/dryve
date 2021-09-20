import { Scrollbars } from 'react-custom-scrollbars-2'

import { Container, Title, Content, Scroll, TrackVertical } from './styles'

interface ICardProps {
  title?: string
  scroll?: boolean
  children?: React.ReactNode
}

export default function Card({ title, scroll = false, children }: ICardProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {scroll ? (
        <Scrollbars
          style={{ width: '100%', height: '100%' }}
          renderTrackVertical={props => <TrackVertical {...props} />}
          renderView={props => <Scroll {...props} />}
          autoHide
        >
          {children}
        </Scrollbars>
      ) : (
        <Content>{children}</Content>
      )}
    </Container>
  )
}
