import request from 'myAxios'

export const signIn = (params) => {
  return request('POST', '/users/sign_in', params)
}

export const signUp = (params) => {
  return request('POST', '/users', params)
}

export const signOut = () => {
  return request('DELETE', '/users/sign_out')
}

export const listMeetings = () => {
  return request('GET', '/api/user/event_zooms')
}

export const getMeeting = (params) => {
  return request('GET', `/api/user/event_zooms/${params.id}`)
}
