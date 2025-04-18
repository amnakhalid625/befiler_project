import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SignSidebar from "../../components/signSidebar/SignSidebar";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const fullPhoneNumber = countryCode + phoneNumber;
  
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        email,
        password,
        phoneNumber: fullPhoneNumber,
      });
  
      toast.success("Account created successfully!");
  
      // Redirect to dashboard
      navigate("/user/dashboard");
    } catch (err) {
      const errorMsg = err?.response?.data?.message || err?.response?.data?.error || "Something went wrong. Please try again.";
      toast.error(errorMsg);
      console.error("Registration error:", err);
    }
  };
  

  return (
    <>
      <SideNavbar />

      <div className="flex min-h-screen bg-white">
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
          <SignSidebar />
        </div>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6"
          >
            <div>
              <p className="text-sm text-gray-600">Welcome</p>
              <h1 className="text-2xl font-bold text-gray-800">
                Create Your Account
              </h1>
            </div>

            {message && (
              <p className="text-sm text-center text-red-500">{message}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              required
            />

            <div className="flex">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="p-2 border border-gray-300 rounded-l-md bg-gray-100 text-sm focus:outline-none"
              >
                <option value="+92">+92</option>
                <option value="+971">+971</option>
                <option value="+966">+966</option>
                <option value="+93">+93</option>
                <option value="+355">+355</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                required
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              required
            />

            <button
              type="submit"
              className="w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/auth/signin" className="text-red-500 hover:underline">
                sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
