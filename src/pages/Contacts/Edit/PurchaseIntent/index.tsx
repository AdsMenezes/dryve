import Card from '../../../../components/Card'
import Button from '../../../../components/Button'

import { Item, ItemImage, ItemContent, Footer } from './styles'

export default function PurchaseIntent() {
  return (
    <Card
      title="Inteção de compra"
      footer={
        <Footer className="row g-2">
          <div className="col-auto">
            <Button>Ver todos</Button>
          </div>
          <div className="col-auto">
            <Button color="white">
              <span className="icon-plus"></span>
              Adicionar
            </Button>
          </div>
        </Footer>
      }
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <Item>
            <ItemImage src="https://m.atcdn.co.uk/vms/media/w300/f091a007b2a84bb3a3fe5c8cb1b5b739.jpg" />
            <ItemContent>
              <h3>HYUNDAI HB20</h3>
              <span className="text-uppercase">COMFORT 1.0 12V FLEX</span>
              <ul>
                <li>2016/2016</li>
                <li>Etanol/Gasolina</li>
              </ul>
              <ul>
                <li>93.385 km</li>
                <li>
                  <span className="price">R$ 36.800</span>
                </li>
              </ul>
            </ItemContent>
          </Item>
        </div>
        <div className="col-12 col-md-6">
          <Item>
            <ItemImage src="https://m.atcdn.co.uk/vms/media/w300/f091a007b2a84bb3a3fe5c8cb1b5b739.jpg" />
            <ItemContent>
              <h3>HYUNDAI HB20</h3>
              <span className="text-uppercase">COMFORT 1.0 12V FLEX</span>
              <ul>
                <li>2016/2016</li>
                <li>Etanol/Gasolina</li>
              </ul>
              <ul>
                <li>93.385 km</li>
                <li>
                  <span className="price">R$ 36.800</span>
                </li>
              </ul>
            </ItemContent>
          </Item>
        </div>
      </div>
    </Card>
  )
}
