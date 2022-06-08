import React from 'react'
import { useParams } from 'react-router-dom'
import '../../App.css'

function ZoomMeeting() {
  const params = useParams()

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting</h1>
        <iframe
          width={1280}
          height={720}
          title="client"
          src={`/zoom/client/${params.id}`}
          id="meeting-iframe"
        ></iframe>
      </main>
    </div>
  )
}

export default ZoomMeeting
