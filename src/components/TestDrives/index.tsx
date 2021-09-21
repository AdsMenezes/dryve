import Card from '../Card'
import { Container, Item, ItemImage, ItemContent, Badge, Time } from './styles'

interface ICar {
  mileage: number
  model_year: number
  name: string
  fuel_type: string
  version_name: string
  image: string
  ad_selling_price: number
  model_name: string
  manufacturing_year: number
}
interface ITestDrivesProps {
  type: 'losers' | 'ofTheDay'
  data: ICar[]
}

export default function TestDrives({ type, data }: ITestDrivesProps) {
  return (
    <Container>
      <Card
        title={`Test-drives ${type === 'losers' ? 'vencidos' : 'do dia'}`}
        isScroll
      >
        {data.length !== 0 &&
          data.map(car => (
            <Item>
              <ItemImage src={car.image} />
              <ItemContent>
                <div>
                  <h3>{car.name}</h3>
                  <span className="text-uppercase">{car.version_name}</span>
                  <ul>
                    <li>
                      {car.model_year}/{car.manufacturing_year}
                    </li>
                    <li>{car.fuel_type}</li>
                  </ul>
                  <ul>
                    <li>{(car.mileage / 1000).toFixed(3)} km</li>
                    <li>
                      <span className="price">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(car.ad_selling_price)}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  {type === 'losers' ? (
                    <>
                      <Badge color="warning">Vencido</Badge>
                      <Time>Há 6 horas</Time>
                    </>
                  ) : (
                    <>
                      <Badge color="info">Agendado</Badge>
                      <Time>Seg, 21/Dez às 16:00</Time>
                    </>
                  )}
                </div>
              </ItemContent>
            </Item>
          ))}
      </Card>
    </Container>
  )
}
