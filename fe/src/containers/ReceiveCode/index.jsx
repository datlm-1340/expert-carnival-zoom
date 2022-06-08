import { zoomAuthCode } from 'requests/userRequests'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser, setUser } from 'token'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ReceiveCode = () => {
  const n = useNavigate()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const user = getUser()

  useEffect(() => {
    if (code) {
      user.code = code
      setUser(user)
      alert(code)
      n('/')
    } else {
      alert('error')
    }
  }, [])

  return (
    <>
      <Link to="/">Go Home</Link>
    </>
  )
}

export default ReceiveCode
