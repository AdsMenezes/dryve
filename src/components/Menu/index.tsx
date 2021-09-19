import { useMenu } from '../../hook/Menu'

import Link from './Link'
import Button from '../Button'

import { Container, Retract } from './styles'

export default function Menu() {
  const { onMenuToggle, isMenuActive } = useMenu()

  function handleToggle() {
    onMenuToggle()
  }

  return (
    <Container active={isMenuActive}>
      <nav className="container-fluid">
        <ul>
          <li>
            <Link icon="dashboard" to="/dashboard" label="Resumo" />
          </li>
          <li>
            <Link icon="tags" to="/opportunities" label="Oportunidades" />
          </li>
          <li>
            <Link icon="calendar" to="/schedule" label="Agenda" />
          </li>
          <li>
            <Link icon="car" to="/vehicles" label="Veículos" />
          </li>
          <li>
            <Link icon="rocket" to="/publication" label="Publicação" />
          </li>
          <li>
            <Link icon="user" to="/contacts" label="Contatos" />
          </li>
          <li>
            <Link icon="chart" to="/analytics" label="Analytics" />
          </li>
          <li>
            <Link icon="bank" to="/financing" label="Financiamento" />
          </li>
        </ul>

        <Retract active={isMenuActive}>
          <Button
            onClick={handleToggle}
            title={isMenuActive ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="icon-retract"></span>
          </Button>
        </Retract>
      </nav>
    </Container>
  )
}
