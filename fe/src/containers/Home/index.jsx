import { Link, Navigate } from 'react-router-dom'
import { getToken } from 'token'

import AdminBox from 'components/AdminBox'
import OAuth from 'components/OAuth'

const Home = () => {
  const token = getToken()

  if (!token)
    return (
      <>
        <Navigate to="/sign_in" />
      </>
    )

  return (
    <>
      <nav>
        <Link to="/sign_out">Sign Out</Link>
      </nav>
      <AdminBox>
        <OAuth />
      </AdminBox>

      <fieldset>
        <legend>Meeting</legend>

        <Link to="/zoom/create_meeting" className="primary-button">
          Create Meeting
        </Link>
        <Link to="/zoom/meetings" className="primary-button">
          Meetings
        </Link>
      </fieldset>
    </>
  )
}

export default Home
