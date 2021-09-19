import { BrowserRouter } from 'react-router-dom'

import { MenuProvider } from './hook/Menu'

import Routes from './routes'
import GlobalStyle from './styles/global'
import MainTemplate from './templates/Main'

export default function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <MainTemplate>
          <Routes />
          <GlobalStyle />
        </MainTemplate>
      </MenuProvider>
    </BrowserRouter>
  )
}
