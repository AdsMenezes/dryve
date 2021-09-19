import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Pagination from '../../components/Pagination'

import {
  Container,
  Heading,
  Content,
  NameInitials,
  TableFooter,
} from './styles'

export default function Contacts() {
  const [page, setPage] = useState(1)
  const router = useHistory()

  function handleContactClick(id: string) {
    router.push(`/contacts/${id}`)
  }

  return (
    <Container>
      <Heading>
        <div className="row g-2 align-items-center">
          <div className="col-auto">
            <h2>Contatos</h2>
          </div>
          <div className="col-auto">
            <Input icon="search" placeholder="Buscar..." />
          </div>
        </div>

        <div className="row g-2 align-items-center">
          <div className="col-auto">
            <Button color="white">
              <span className="icon icon-tune me-2"></span>
              Filtrar
            </Button>
          </div>
          <div className="col-auto">
            <Button color="primary">
              <span className="icon icon-plus me-1"></span>
              Adicionar
            </Button>
          </div>
        </div>
      </Heading>

      <Content>
        <table>
          <thead>
            <tr>
              <td>Nome do cliente</td>
              <td>E-mail</td>
              <td>Telefone</td>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleContactClick('id')}>
              <td>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <NameInitials>PG</NameInitials>
                  </div>
                  <div className="col-auto">Pedro</div>
                </div>
              </td>
              <td>
                <a href="mailto:pedrogandra@gmail.com">pedrogandra@gmail.com</a>
              </td>
              <td>(16) 99610-4666</td>
            </tr>
          </tbody>
        </table>
        <TableFooter>
          <Pagination
            totalCountOfRegisters={200}
            currentPage={page}
            onPageChange={setPage}
          />
        </TableFooter>
      </Content>
    </Container>
  )
}
