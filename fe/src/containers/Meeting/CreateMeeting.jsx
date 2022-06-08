import React, { useState } from 'react'
import { createMeeting } from 'requests/zoomRequests'
import { Link } from 'react-router-dom'

const CreateMeeting = () => {
  const initialState = {
    userId: 'me',
    agenda: 'My Meeting',
    password: '',
    topic: 'My Topic',
    allow_multiple_devices: true,
    private_meeting: false,
    approval_type: 2,
  }

  const [data, setData] = useState(initialState)

  const change = (e) => {
    const newData = { ...data }
    if (e.target.type === 'checkbox') {
      newData[e.target.name] = !newData[e.target.name]
    } else {
      newData[e.target.name] = e.target.value
    }

    setData(newData)
  }

  const submit = () => {
    createMeeting(data)
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <fieldset>
        <legend>Meeting Info</legend>

        <details>
          <summary>
            <span>User:</span>
            <input
              type="text"
              name="userId"
              value={data.userId}
              onChange={change}
            />
          </summary>
          <p>
            The user ID or email address of the user. For user-level apps, pass
            the me value.
          </p>
        </details>

        <details>
          <summary>
            <span>Agenda:</span>
            <textarea
              type="text"
              name="agenda"
              value={data.agenda}
              onChange={change}
            />
          </summary>
          <p>
            The meeting's agenda. This value has a maximum length of 2,000
            characters.
          </p>
        </details>

        <details>
          <summary>
            <span>Password:</span>
            <input
              type="text"
              name="password"
              maxLength={10}
              value={data.password}
              onChange={change}
            />
          </summary>
          <p>
            The password required to join the meeting. By default, a password
            can only have a maximum length of 10 characters and only contain
            alphanumeric characters and the @, -, _, and * characters.
          </p>
        </details>

        <fieldset>
          <legend>Settings</legend>

          <details>
            <summary>
              <span>Allow multiple devices:</span>
              <input
                type="checkbox"
                name="allow_multiple_devices"
                defaultChecked={data.allow_multiple_devices}
                onChange={change}
              />
            </summary>
            <p>
              Whether to allow attendees to join a meeting from multiple
              devices. This setting is only applied to meetings with
              registration enabled.
            </p>
          </details>

          <details>
            <summary>
              <span>Private meeting:</span>
              <input
                type="checkbox"
                name="private_meeting"
                defaultChecked={data.private_meeting}
                onChange={change}
              />
            </summary>
            <p>Whether to set the meeting as private.</p>
          </details>

          <details>
            <summary>
              <span>Approval type:</span>
              <input
                type="text"
                name="approval_type"
                value={data.approval_type}
                onChange={change}
              />
            </summary>
            <p>
              Enable meeting registration approval:
              <br />
              0 — Automatically approve registration.
              <br />
              1 — Manually approve registration.
              <br />
              2 — No registration required.
              <br />
            </p>
          </details>
        </fieldset>

        <details>
          <summary>
            <span>Topic:</span>
            <input
              type="text"
              name="topic"
              value={data.topic}
              onChange={change}
            />
          </summary>
          <p>The meeting's topic.</p>
        </details>

        <button className="primary-button" onClick={submit}>
          Create
        </button>
      </fieldset>
    </>
  )
}

export default CreateMeeting
