import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const mocky = axios.create({
  baseURL: 'http://www.mocky.io/v2',
})
