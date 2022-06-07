import React, { createRef, useEffect, useState } from 'react'
import { signIn } from "requests/signInRequests"
import { setToken } from "token"
import { formData } from 'utils'
import request from 'myAxios'
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const ref = createRef()

  const submit = (e) => {
    e.preventDefault()

    const params = { user: formData(ref.current) }
    signIn(params)
      .then(res => {
        if (res.status) {
          setToken(res.token)
          console.log(res)
          navigate('/')
        }
      })
      .catch(errors => {
        alert('Login information is incorrect')
      })
  }

  return <>
    <h1>Sign In</h1>

    <form ref={ref}>
      <fieldset>
        <legend>Data</legend>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <label htmlFor="password">Role:</label>
        <select name="role">
          <option value="0">User</option>
          <option value="1">Admin</option>
        </select><br /><br />
        <button onClick={submit}>Sign In</button>
      </fieldset>
    </form>
  </>
}

export default SignInPage