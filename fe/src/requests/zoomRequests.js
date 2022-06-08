import request from "myAxios";

export const oauthAuthorize = (params) => {
  return request("GET", "/api/zoom/request_access_token", params);
};

export const checkOauthAuthorize = () => {
  return request("GET", "/api/zoom/get_access_token");
};

export const createMeeting = (params) => {
  return request("POST", "/api/zoom/meetings", params);
};
