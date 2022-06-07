import React, { createRef, useEffect } from 'react'
import { signUp } from "requests/userRequests"
import { formData } from 'utils'
import { useNavigate } from 'react-router-dom';
import { getToken } from "token"

const RegistrationPage = () => {
  const navigate = useNavigate();
  const ref = createRef()
  const token = getToken()

  useEffect(() => {
    if (token) {
      alert("you signed in!!")
      navigate('/')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    const params = { user: formData(ref.current) }
    signUp(params)
      .then(res => {
        if (res.data.status) {
          navigate('/sign_in')
        }
      })
  }

  return <>
    <h1>Sign Up</h1>

    <form ref={ref}>
      <fieldset>
        <legend>Data</legend>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <label htmlFor="password_confirmation">Password Confirm:</label>
        <input type="password" id="passwordConfirmation" name="password_confirmation" /><br /><br />
        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select><br /><br />
        <button onClick={submit}>Sign Up</button>
      </fieldset>
    </form>
  </>
}

export default RegistrationPage