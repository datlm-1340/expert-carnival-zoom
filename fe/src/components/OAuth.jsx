import { getUser, setUser } from 'token'
import { oauthAuthorize } from 'requests/zoomRequests'
import env from 'react-dotenv'

const OAuth = () => {
  const user = getUser()
  const ZOOM_OAUTH_URL = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`

  const getZoomAccessToken = () => {
    oauthAuthorize({ code: user.code }).then((res) => {
      delete user.code
      user.zoom = {
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      }

      setUser(user)
    })
  }

  return (
    <>
      <fieldset>
        <legend>OAuth Information</legend>
        <a
          target="_blank"
          href={ZOOM_OAUTH_URL}
          rel="noreferrer"
          className="primary-button"
        >
          Get code Zoom
        </a>
        <button className="primary-button" onClick={getZoomAccessToken}>
          Get Zoom Access Token
        </button>
        {user.code && <p>Code: {user.code}</p>}
        {user.zoom?.access_token && <p>Access Token: ok</p>}
        {user.zoom?.refresh_token && <p>Refresh Token: ok</p>}
      </fieldset>
    </>
  )
}

export default OAuth
