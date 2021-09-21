import Card from '../Card'
import { Container, Item, ItemImage, ItemContent, Badge, Time } from './styles'

interface ITestDrivesProps {
  type: 'losers' | 'ofTheDay'
}

export default function TestDrives({ type }: ITestDrivesProps) {
  return (
    <Container>
      <Card
        title={`Test-drives ${type === 'losers' ? 'vencidos' : 'do dia'}`}
        isScroll
      >
        <Item>
          <ItemImage src="https://m.atcdn.co.uk/vms/media/w300/f091a007b2a84bb3a3fe5c8cb1b5b739.jpg" />
          <ItemContent>
            <div>
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
      </Card>
    </Container>
  )
}
