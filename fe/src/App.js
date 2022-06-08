import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import SignInPage from './containers/SignInPage'
import RegistrationPage from './containers/RegistrationPage'
import SignOutPage from './containers/SignOutPage'
import ReceiveCode from './containers/ReceiveCode'
import Meeting from './containers/Meeting'
import CreateMeeting from './containers/Meeting/CreateMeeting'
import ZoomClient from 'containers/ZoomClient'
import ZoomMeeting from 'containers/ZoomMeeting'
import Thanks from 'containers/Thanks'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/code" element={<ReceiveCode />}></Route>
        <Route path="/sign_in" element={<SignInPage />}></Route>
        <Route path="/sign_up" element={<RegistrationPage />}></Route>
        <Route path="/sign_out" element={<SignOutPage />}></Route>
        <Route path="/zoom/create_meeting" element={<CreateMeeting />}></Route>
        <Route path="/zoom/meetings" element={<Meeting />}></Route>
        <Route path="/zoom/meeting/:id" element={<ZoomMeeting />}></Route>
        <Route path="/zoom/client/:id" element={<ZoomClient />}></Route>
        <Route path="/zoom/thanks" element={<Thanks />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
