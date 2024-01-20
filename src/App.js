
import './App.css'
import { Route, Routes } from "react-router-dom";
import Main from './Layout/Main/Main';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admins from './Pages/Admins/Admins';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Main />
            }
          >
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/admins'} element={<Admins />} />
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
