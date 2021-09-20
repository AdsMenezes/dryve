import Card from '../Card'
import { Container, Item, ItemImageBox, ItemImage, ItemContent } from './styles'

export default function LeadsByPortal() {
  return (
    <Container>
      <Card title="Leads por portal (últimos 30 dias)" scroll>
        <Item>
          <ItemImageBox>
            <ItemImage src="https://static.bn-static.com/img-49626/olx-share.jpg" />
          </ItemImageBox>
          <ItemContent>
            <span>OLX</span>
            <span>10</span>
          </ItemContent>
        </Item>
      </Card>
    </Container>
  )
}
