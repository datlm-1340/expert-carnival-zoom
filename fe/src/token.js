const KEY = 'accessToken'

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const setToken = (token) => {
  return localStorage.setItem(KEY, token)
}

export const clearToken = () => {
  return localStorage.removeItem(KEY)
}