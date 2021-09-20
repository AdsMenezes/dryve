import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

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

interface IContact {
  id: number
  name: string
  surname: string
  email: string
  phone: string
}

function formatNameInitials(name: string, surname: string) {
  return `${name.substr(0, 1)}${surname.substr(0, 1)}`.toLocaleUpperCase()
}

export default function Contacts() {
  const [contacts, setContacts] = useState([] as IContact[])
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage] = useState(8)
  const router = useHistory()

  useEffect(() => {
    api
      .get(`/contacts?page=${page}&per_page=${perPage}`)
      .then(({ data, headers }) => {
        setContacts(data)
        setTotalCount(Number(headers['x-total-count']))
      })
      .catch(err => console.error(err))
  }, [page, perPage])

  function handleContactClick(id: number) {
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
            {contacts.length !== 0 &&
              contacts.map(contact => (
                <tr
                  key={contact.id}
                  onClick={() => handleContactClick(contact.id)}
                >
                  <td>
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <NameInitials>
                          {formatNameInitials(contact.name, contact.surname)}
                        </NameInitials>
                      </div>
                      <div className="col-auto">
                        {contact.name} {contact.surname}
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <TableFooter>
          <Pagination
            totalCountOfRegisters={totalCount}
            registersPerPage={perPage}
            currentPage={page}
            onPageChange={setPage}
          />
        </TableFooter>
      </Content>
    </Container>
  )
}
