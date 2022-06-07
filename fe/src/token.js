const KEY = 'accessToken'
const USER_KEY = 'user'

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const setToken = (token) => {
  return localStorage.setItem(KEY, token)
}

export const clearToken = () => {
  return localStorage.removeItem(KEY)
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY))
}

export const setUser = (data) => {
  return localStorage.setItem(USER_KEY, JSON.stringify(data))
}

export const clearUser = () => {
  return localStorage.removeItem(USER_KEY)
}