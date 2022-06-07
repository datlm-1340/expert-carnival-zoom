import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './containers/Home'
import SignInPage from './containers/SignInPage'
import RegistrationPage from './containers/RegistrationPage'
import SignOutPage from './containers/SignOutPage'
import ReceiveCode from './containers/ReceiveCode'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/code" element={<ReceiveCode />}></Route>
        <Route path="/sign_in" element={<SignInPage />}></Route>
        <Route path="/sign_up" element={<RegistrationPage />}></Route>
        <Route path="/sign_out" element={<SignOutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
