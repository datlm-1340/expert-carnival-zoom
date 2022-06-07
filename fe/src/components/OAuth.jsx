import { getUser, setUser } from 'token'
import { oauthAuthorize } from "requests/zoomRequests";

const OAuth = () => {
  const user = getUser()
  const ZOOM_OAUTH_URL = "https://zoom.us/oauth/authorize?response_type=code&client_id=z8Yvq0bxQbaGlrRCc7C2Tw&redirect_uri=https%3A%2F%2Fc1df-1-52-125-159.ap.ngrok.io%2Fcode"

  const getZoomAccessToken = () => {
    oauthAuthorize({ code: user.code })
      .then(res => {
        delete user.code
        user.zoom = {
          access_token: res.data.access_token,
          refresh_token: res.data.refresh_token
        }

        setUser(user)
      })
  }

  return <>
    <fieldset>
      <legend>OAuth Information</legend>
      <button>
        <a target="_blank" href={ZOOM_OAUTH_URL}>
          Get code Zoom
        </a>
      </button>
      <button onClick={getZoomAccessToken}>
        Get Zoom Access Token
      </button>
      {user.code && <p>Code: {user.code}</p>}
      {user.zoom?.access_token && <p>Access Token: ok</p>}
      {user.zoom?.refresh_token && <p>Refresh Token: ok</p>}
    </fieldset>
  </>
}

export default OAuth