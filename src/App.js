import "./App.css";
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Main from "./Layout/Main/Main";
import CustomRoutes from "./routes/CustomRoutes";
import Admins from "./Pages/Admins/Admins";
import SignIn from "./Pages/SignIn/SignIn";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";

function App() {


  return (
    <>
      <div>
        <CustomRoutes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgotPass" element={<ForgotPass />} />
          {/* ------------------------admin dashboard route--------------------- */}
          <Route path="/admin" element={<Main></Main>}>
            <Route path="/admin/dashboard" element={<Admins />} />
          </Route>
        </CustomRoutes>

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
