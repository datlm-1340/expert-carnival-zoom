import axios from 'axios'
import { getToken } from './token'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
})

const assignToken = () => {
  const token = getToken()
  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return headers
}

const request = (method, url, params) => {
  const body = {
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      ...assignToken(),
    },
  }

  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    body.data = params
  } else {
    body.params = params
  }

  return instance(body)
}

export default request
