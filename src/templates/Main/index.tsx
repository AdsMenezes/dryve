import { useMenu } from '../../hook/Menu'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { Container } from './styles'

interface IMainTemplateProps {
  children: React.ReactNode
}

export default function MainTemplate({ children }: IMainTemplateProps) {
  const { isMenuActive } = useMenu()

  return (
    <>
      <Header />
      <Menu />
      <Container active={isMenuActive}>
        <div className="container-fluid">{children}</div>
      </Container>
    </>
  )
}
