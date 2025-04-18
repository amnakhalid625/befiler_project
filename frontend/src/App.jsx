import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Forget from "./pages/forgetpassword/Forget";
import UserDashboard from "./dashboards/userDashboard/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
