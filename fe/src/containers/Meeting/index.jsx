import React, { useEffect, useState } from 'react'
import { listMeetings } from 'requests/userRequests'
import AdminBox from 'components/AdminBox'
import { Link } from "react-router-dom";

const Meeting = () => {
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    listMeetings().then(res => {
      console.log(res)
      setMeetings(res.data)
    })
  }, [])

  const meetingsNodes = meetings.map((item, index) => {
    return <tr key={index}>
      <td>{item.metting_id}</td>
      <td>{item.metting_name}</td>
      <AdminBox>
        <td>{item.metting_pw}</td>
        <td><a href={item.start_url}>{item.start_url}</a></td>
      </AdminBox>
      <td><a href={item.url}>{item.url}</a></td>
    </tr>
  })

  return <>
    <nav>
      <Link to="/">Home</Link>
    </nav>

    <table border={1}>
      <thead>
        <th>Meeting ID</th>
        <th>Meeting Name</th>
        <AdminBox>
          <th>Meeting Password</th>
          <th>Start URL</th>
        </AdminBox>
        <th>URL</th>
      </thead>

      <tbody>
        {meetingsNodes}
      </tbody>
    </table>
  </>
}

export default Meeting