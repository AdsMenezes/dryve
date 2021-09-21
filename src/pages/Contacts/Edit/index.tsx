import { useState, useMemo, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'

import { api } from '../../../services/api'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Radio from '../../../components/Radio'
import Select from '../../../components/Select'
import Adverts from './Adverts'
import IntentionToSell from './IntentionToSell'
import Opportunities from './Opportunities'
import PurchaseIntent from './PurchaseIntent'

import stateJSON from './state.json'

import { Container, Heading, Content } from './styles'
import Card from '../../../components/Card'

interface IContactFormData {
  type: 'physical' | 'legal'
  name: string
  surname: string
  email: string
  phone: string
  birth: string
  genre: 'male' | 'female'
  rg: string
  cpf: string
  cep: string
  address: string
  number: string
  complement: string
  district: string
  city: string
  state: string
  bank: string
  account_type: 'current' | 'savings'
  agency: string
  account: string
  digit: string
}

interface IContactsEditParams {
  id: string
}

interface IContact {
  name: string
  surname: string
}

export default function ContactsEdit() {
  const [contact, setContact] = useState({} as IContact)
  const { id } = useParams<IContactsEditParams>()
  const { register, handleSubmit, getValues, watch, reset } = useForm()

  useEffect(() => {
    api.get(`/contacts/${id}`).then(response => {
      reset(response.data[0])
      setContact(response.data[0])
    })
  }, [])

  const handleSubmitContact: SubmitHandler<IContactFormData> = async event => {
    console.log(event)
  }

  const states = useMemo(() => {
    return Object.entries(stateJSON.states)
      .sort((a, b) => (a[1] > b[1] ? 1 : b[1] > a[1] ? -1 : 0))
      .map(({ '0': id, '1': name }) => ({ value: id, label: name }))
  }, [])

  const cities = useMemo(() => {
    return Object.values(stateJSON.cities)
      .filter(city => city.state_id === Number(getValues('state')))
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      .map(({ id, name }) => ({ value: id, label: name }))
  }, [watch('state')])

  return (
    <Container>
      <Heading>
        <div className="row g-2 align-items-center">
          <div className="col-auto">
            <Link to="/contacts">
              <Button>
                <span className="icon icon-arrow-left"></span>
              </Button>
            </Link>
          </div>
          <div className="col-auto">
            <h2>Editar contato</h2>
          </div>
        </div>
      </Heading>

      <Content>
        <div className="row g-3">
          <div className="col-xl-6">
            <form onSubmit={handleSubmit(handleSubmitContact)}>
              <Card
                title="Informações"
                footer={
                  <Button color="primary" type="submit">
                    Salvar
                  </Button>
                }
              >
                <div className="row g-2 mb-4">
                  <div className="col-auto">
                    <Radio
                      label="Pessoa física"
                      value="physical"
                      {...register('type')}
                    />
                  </div>
                  <div className="col-auto">
                    <Radio
                      label="Pessoa jurídica"
                      value="legal"
                      {...register('type')}
                    />
                  </div>
                </div>

                <h4 className="mb-4">Dados pessoais</h4>
                <div className="row g-2">
                  <div className="col-md-6">
                    <Input
                      type="text"
                      label="Nome"
                      required
                      {...register('name')}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      type="text"
                      label="Sobrenome"
                      required
                      {...register('surname')}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      type="email"
                      label="E-mail"
                      required
                      {...register('email')}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      type="tel"
                      label="Telefone"
                      mask="(99) 9999-99999"
                      required
                      {...register('phone')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="date"
                      label="Nascimento"
                      icon="calendar-search"
                      required
                      {...register('birth')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Select
                      label="Gênero"
                      options={[
                        { value: 'male', label: 'Masculino' },
                        { value: 'female', label: 'Feminino' },
                      ]}
                      required
                      {...register('genre')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="RG"
                      mask="99.999.999-9"
                      required
                      {...register('rg')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="CPF"
                      mask="999.999.999-99"
                      required
                      {...register('cpf')}
                    />
                  </div>
                </div>

                <h4 className="my-4">Endereço</h4>
                <div className="row g-2">
                  <div className="col-md-3 me-md-5">
                    <Input
                      type="text"
                      label="CEP"
                      icon="search"
                      mask="99999-999"
                      required
                      {...register('cep')}
                    />
                  </div>

                  <div className="col-md-9">
                    <Input
                      type="text"
                      label="Endereço"
                      required
                      {...register('address')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="Número"
                      mask="99999"
                      required
                      {...register('number')}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      type="text"
                      label="Complemento"
                      required
                      {...register('complement')}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      type="text"
                      label="Bairro"
                      required
                      {...register('district')}
                    />
                  </div>

                  <div className="col-md-9">
                    <Select
                      label="Cidade"
                      options={cities}
                      disabled={cities.length === 0}
                      required
                      {...register('city')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Select
                      label="Estado"
                      options={states}
                      required
                      {...register('state')}
                    />
                  </div>
                </div>

                <h4 className="my-4">Dados bancários</h4>
                <div className="row g-2">
                  <div className="col-md-12">
                    <Select
                      label="Banco"
                      options={stateJSON.banks}
                      required
                      {...register('bank')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Select
                      label="Tipo de conta"
                      options={[
                        { value: 'current', label: 'Corrente' },
                        { value: 'savings', label: 'Poupança' },
                      ]}
                      required
                      {...register('account_type')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="Agência"
                      mask="9999-9"
                      required
                      {...register('agency')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="Conta"
                      mask="9999999"
                      required
                      {...register('account')}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input
                      type="text"
                      label="Dígito"
                      mask="9"
                      required
                      {...register('digit')}
                    />
                  </div>
                </div>

                <h4 className="my-4">Tags</h4>
                <div className="row g-3">
                  <div className="col-md-12">
                    <Button color="white">
                      <span className="icon icon-plus me-1"></span>
                      Adicionar
                    </Button>
                  </div>
                </div>
              </Card>
            </form>
          </div>
          <div className="col-xl-6">
            <div className="row g-3">
              <div className="col-12">
                <PurchaseIntent />
              </div>
              <div className="col-12">
                <IntentionToSell />
              </div>
              <div className="col-12">
                <Adverts />
              </div>
              <div className="col-12">
                <Opportunities name={contact.name} surname={contact.surname} />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}
