import request from "myAxios";

export const oauthAuthorize = (params) => {
  return request("GET", "/api/zoom/request_access_token", params);
};

export const createMeeting = (params) => {
  return request("POST", "/api/zoom/meetings", params);
};
