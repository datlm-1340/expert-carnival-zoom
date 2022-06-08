import { getUser } from 'token'

const AdminBox = ({ children }) => {
  const user = getUser()
  const isAdmin = user.role === 'admin'

  return isAdmin && <>{children}</>
}

export default AdminBox
