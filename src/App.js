
import './App.css'
import { Route, Routes } from "react-router-dom";
import Main from './Layout/Main/Main';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admins from './Pages/Admins/Admins';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import ForgotPass from './Pages/ForgotPass/ForgotPass';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/forgotPass' element={<ForgotPass/>} />
          <Route
            path="/admin/"
            element={
              <Main />
            }
          >

            <Route path={'dashboard'} element={<Dashboard />} />
            <Route path={'admins'} element={<Admins />} />
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
