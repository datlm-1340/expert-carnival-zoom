import { oauthAuthorize, checkOauthAuthorize } from 'requests/zoomRequests'
import { useEffect, useState } from 'react'

const OAuth = () => {
  const [code, setCode] = useState()
  const [accessToken, setAccessToken] = useState()
  const ZOOM_OAUTH_URL = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`

  useEffect(() => {
    checkOauthAuthorize().then((res) => {
      setAccessToken(res.data.access_token)
    })
  }, [])

  const getZoomAccessToken = () => {
    oauthAuthorize({ code }).then((res) => {
      setAccessToken(res.data.access_token)
    })
  }

  const changeCode = (e) => {
    setCode(e.target.value)
  }

  return (
    <>
      <fieldset>
        <legend>OAuth Information</legend>
        {!accessToken && (
          <p>
            <strong>Click 'Get code Zoom' to Authorize</strong>
          </p>
        )}
        {!accessToken && (
          <a
            target="_blank"
            href={ZOOM_OAUTH_URL}
            rel="noreferrer"
            className="primary-button"
          >
            Get code Zoom
          </a>
        )}
        <button className="primary-button" onClick={getZoomAccessToken}>
          {!!accessToken ? 'Refresh Token' : 'Get Zoom Access Token'}
        </button>
        {!accessToken && (
          <input
            type="text"
            name="code"
            placeholder="code"
            onChange={changeCode}
          />
        )}
      </fieldset>
    </>
  )
}

export default OAuth
