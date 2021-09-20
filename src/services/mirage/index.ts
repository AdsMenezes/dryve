import { createServer, Model, Factory, Response } from 'miragejs'
import faker from 'faker/locale/pt_BR'

type IContact = {
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

export default function makeServer() {
  const server = createServer({
    models: {
      contact: Model.extend<Partial<IContact>>({}),
    },

    factories: {
      contact: Factory.extend({
        type() {
          return faker.random.arrayElement(['physical', 'legal'])
        },

        name() {
          return faker.name.firstName()
        },

        surname() {
          return faker.name.lastName()
        },

        email() {
          return faker.internet.email().toLocaleLowerCase()
        },

        phone() {
          return '(11) 92357-9633'
        },

        birth() {
          return '1990-03-20'
        },

        genre() {
          return faker.random.arrayElement(['male', 'female'])
        },

        rg() {
          return faker.datatype
            .number({ min: 100000000, max: 999999999 })
            .toString()
        },

        cpf() {
          return faker.datatype
            .number({ min: 1000000000, max: 9999999999 })
            .toString()
        },

        cep() {
          return faker.datatype
            .number({ min: 10000000, max: 99999999 })
            .toString()
        },

        address() {
          return faker.address.streetName()
        },

        number() {
          return faker.datatype.number({ min: 1, max: 999 }).toString()
        },

        complement() {
          return faker.address.cityName()
        },

        district() {
          return faker.address.streetAddress()
        },

        city() {
          return '3550308'
        },

        state() {
          return '35'
        },

        bank() {
          return '184'
        },

        accountType() {
          return faker.random.arrayElement(['current', 'savings'])
        },

        agency() {
          return faker.datatype.number({ min: 10000, max: 99999 }).toString()
        },

        account() {
          return faker.datatype.number({ min: 10000, max: 99999 }).toString()
        },

        digit() {
          return faker.datatype.number({ min: 1, max: 9 }).toString()
        },
      }),
    },

    seeds(server) {
      server.createList('contact', 100)
    },

    routes() {
      this.namespace = 'api'

      this.get('/contacts', (schema, request) => {
        const { page = 1, per_page = 8 } = request.queryParams

        const start = (Number(page) - 1) * Number(per_page)
        const end = start + Number(per_page)
        const total = schema.all('contact').length

        const contacts = schema.all('contact').models.slice(start, end)

        return new Response(200, { 'x-total-count': String(total) }, contacts)
      })

      this.get('/contacts/:id', (schema, request) => {
        const { id } = request.params

        return schema.where('contact', { id }).models
      })
    },
  })

  return server
}
