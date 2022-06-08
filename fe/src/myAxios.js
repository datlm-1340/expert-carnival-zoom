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

const request = async (method, url, params) => {
  const body = {
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      ...assignToken(),
    },
  }

  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    body.data = params
  } else {
    body.params = params
  }

  try {
    const response = await instance(body)
    return response
  } catch (error) {
    alert(error.response.status + ' ' + JSON.stringify(error.response.data))

    return Promise.reject(error.response)
  }
}

export default request
