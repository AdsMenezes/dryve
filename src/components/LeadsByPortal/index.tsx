import Card from '../Card'
import { Container, Item, ItemImageBox, ItemImage, ItemContent } from './styles'

import olx from '../../static/temp/olx.png'
import webmotors from '../../static/temp/webmotors.png'
import icarros from '../../static/temp/icarros.png'
import autoline from '../../static/temp/autoline.png'
import mercadoLivre from '../../static/temp/mercado_livre.png'

export default function LeadsByPortal() {
  const leadsMoock = [
    { image: olx, name: 'OLX', value: 40 },
    { image: webmotors, name: 'Webmotors', value: 29 },
    { image: icarros, name: 'iCarros', value: 18 },
    { image: autoline, name: 'Autoline', value: 7 },
    { image: mercadoLivre, name: 'MercadoLivre', value: 5 },
    { image: webmotors, name: 'Webmotors', value: 4 },
    { image: autoline, name: 'Autoline', value: 2 },
    { image: olx, name: 'OLX', value: 1 },
  ]
  return (
    <Container>
      <Card title="Leads por portal (últimos 30 dias)" isScroll>
        {leadsMoock.length !== 0 &&
          leadsMoock.map(lead => (
            <Item>
              <ItemImageBox>
                <ItemImage src={lead.image} />
              </ItemImageBox>
              <ItemContent>
                <span>{lead.name}</span>
                <span>{lead.value}</span>
              </ItemContent>
            </Item>
          ))}
      </Card>
    </Container>
  )
}
