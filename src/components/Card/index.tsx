import { Scrollbars } from 'react-custom-scrollbars-2'
import Button from '../Button'

import {
  Container,
  Title,
  Content,
  Scroll,
  TrackVertical,
  NoContent,
  AddContent,
  Footer,
} from './styles'

interface ICardProps {
  title?: string
  isScroll?: boolean
  noContentLabel?: string
  onAdd?: () => void
  footer?: React.ReactElement
  children?: React.ReactNode
}

export default function Card({
  title,
  isScroll = false,
  noContentLabel,
  onAdd,
  footer,
  children,
}: ICardProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {isScroll ? (
        <Scrollbars
          style={{ width: '100%', height: '100%' }}
          renderTrackVertical={props => <TrackVertical {...props} />}
          renderView={props => <Scroll {...props} />}
          autoHide
        >
          {children}
        </Scrollbars>
      ) : (
        <Content>
          {noContentLabel && <NoContent>{noContentLabel}</NoContent>}
          {onAdd && (
            <AddContent>
              <Button color="white" onClick={onAdd}>
                <span className="icon-plus"></span>
                Adicionar
              </Button>
            </AddContent>
          )}
          {children}
        </Content>
      )}
      {footer && <Footer>{footer}</Footer>}
    </Container>
  )
}
