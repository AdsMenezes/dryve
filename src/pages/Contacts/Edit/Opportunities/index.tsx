import Card from '../../../../components/Card'
import { Item, ItemImageBox, ItemImagePlatform, ItemImageCar } from './styles'

export default function Opportunities() {
  return (
    <Card title="Oportunidades">
      <div className="row">
        <div className="col-12 col-md-6">
          <Item>
            <div>
              <span>
                <strong>Pedro Gandra de Carvalho</strong>
              </span>
              <span>
                <strong>Valor:</strong> R$ 30.900
              </span>
              <span>
                <strong>Data:</strong> 21 de junho
              </span>
            </div>
            <div>
              <ItemImageBox>
                <ItemImagePlatform src="https://static.bn-static.com/img-49626/olx-share.jpg" />
              </ItemImageBox>
              <ItemImageBox>
                <ItemImageCar src="https://m.atcdn.co.uk/vms/media/w300/f091a007b2a84bb3a3fe5c8cb1b5b739.jpg" />
              </ItemImageBox>
            </div>
          </Item>
        </div>
        <div className="col-12 col-md-6">
          <Item>
            <div>
              <span>
                <strong>Pedro Gandra de Carvalho</strong>
              </span>
              <span>
                <strong>Valor:</strong> R$ 30.900
              </span>
              <span>
                <strong>Data:</strong> 21 de junho
              </span>
            </div>
            <div>
              <ItemImageBox>
                <ItemImagePlatform src="https://static.bn-static.com/img-49626/olx-share.jpg" />
              </ItemImageBox>
              <ItemImageBox>
                <ItemImageCar src="https://m.atcdn.co.uk/vms/media/w300/f091a007b2a84bb3a3fe5c8cb1b5b739.jpg" />
              </ItemImageBox>
            </div>
          </Item>
        </div>
      </div>
    </Card>
  )
}
