import { Link, useNavigate, Navigate } from "react-router-dom";
import { getToken, getUser } from 'token'

import AdminBox from 'components/AdminBox'
import OAuth from 'components/OAuth'

const Home = () => {
  const navigate = useNavigate()
  const token = getToken()
  const user = getUser()

  if (!token) return <>
    <Navigate to="/sign_in" />
  </>

  return <>
    <nav>
      <Link to="/sign_out">Sign Out</Link>
    </nav>
    <AdminBox>
      <OAuth />
    </AdminBox>

    <fieldset>
      <legend>Meeting</legend>

      <AdminBox><Link to="/zoom/create_meeting">Create Meeting</Link></AdminBox>
      <Link to="/zoom/meetings">Meetings</Link>
    </fieldset>
  </>
}

export default Home