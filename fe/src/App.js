import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './containers/Home'
import SignInPage from './containers/SignInPage'
import RegistrationPage from './containers/RegistrationPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign_in" element={<SignInPage />}></Route>
        <Route path="/sign_up" element={<RegistrationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
