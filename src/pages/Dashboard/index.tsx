import Chart from '../../components/Chart'
import LeadsByPortal from '../../components/LeadsByPortal'
import Summary from '../../components/Summary'
import TestDrives from '../../components/TestDrives'

import { Container, Heading, Content } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Heading>
        <div className="row g-2 align-items-center">
          <div className="col-auto">
            <h2>Resumo</h2>
          </div>
        </div>
      </Heading>

      <Content>
        <div className="row g-4 mb-4">
          <div className="col-6 col-xl-3">
            <Summary title="Veículos publicados" value="26" icon="car" />
          </div>
          <div className="col-6 col-xl-3">
            <Summary title="Preço médio" value="R$ 41.5k" icon="price" />
          </div>
          <div className="col-6 col-xl-3">
            <Summary title="Km médio" value="68.800 km" icon="mileage" />
          </div>
          <div className="col-6 col-xl-3">
            <Summary
              title="Idade média do estoque"
              value="4 anos"
              icon="calendar"
            />
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-12 col-xl-8 col-xxl-9">
            <Chart />
          </div>
          <div className="col-12 col-xl-4 col-xxl-3">
            <LeadsByPortal />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <TestDrives type="losers" />
          </div>
          <div className="col-12 col-md-6">
            <TestDrives type="ofTheDay" />
          </div>
        </div>
      </Content>
    </Container>
  )
}
