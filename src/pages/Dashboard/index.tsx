import { useState, useEffect } from 'react'

import Chart from '../../components/Chart'
import LeadsByPortal from '../../components/LeadsByPortal'
import Summary from '../../components/Summary'
import TestDrives from '../../components/TestDrives'

import { Container, Heading, Content } from './styles'

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

export default function Dashboard() {
  const [car, setCar] = useState([] as ICar[])

  useEffect(() => {
    /* MirageJS was giving problem with axios, provisionally I will use fetch until I found the problem. */
    fetch('http://www.mocky.io/v2/5eb553df31000060006994a8')
      .then(response => response.json())
      .then(response => setCar(response))
      .catch(err => console.error(err))
  }, [])

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
          <div className="col-12 col-xl-6">
            <TestDrives type="losers" data={car} />
          </div>
          <div className="col-12 col-xl-6">
            <TestDrives type="ofTheDay" data={car} />
          </div>
        </div>
      </Content>
    </Container>
  )
}
