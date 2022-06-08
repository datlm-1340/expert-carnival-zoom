import { signOut } from 'requests/userRequests'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { clearToken, clearUser } from 'token'
import { useNavigate } from 'react-router-dom'

const SignOutPage = () => {
  const n = useNavigate()

  useEffect(() => {
    signOut()
    clearToken()
    clearUser()
    n('/')
  }, [])

  return (
    <>
      <Link to="/">Go Home</Link>
    </>
  )
}

export default SignOutPage
