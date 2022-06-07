import request from "myAxios"

export const signIn = (params) => {
  return request("POST", "/users/sign_in", params)
}