import request from "myAxios"

export const oauthAuthorize = (params) => {
  return request("GET", "/api/zoom/request_access_token", params)
}