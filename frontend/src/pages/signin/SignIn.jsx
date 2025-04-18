import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideNavbar from "../../components/sidenavbar/SideNavbar";
import SignSidebar from "../../components/signSidebar/SignSidebar";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { toast } from "react-hot-toast";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Google Login Success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/google-signin', {
        credential: credentialResponse.credential, 
      });
      
      toast.success("Google login successful!");
      // Redirect or update state based on response
    } catch (error) {
      toast.error("Error with Google login!");
      console.error(error);
    }
  };

  // Handle Google Login Failure
  const handleGoogleError = (error) => {
    toast.error("Google login failed!");
    console.log(error);
  };

  // Handle regular Sign In (email and password)
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (res.data.token) {
        toast.success("Sign-in successful!");
        localStorage.setItem('token', res.data.token); // Store token
        // Redirect or update state
        window.location.href = '/dashboard'; 
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Sign-in failed!";
      toast.error(`${errorMsg}`);
      console.error(err);
    }
  };

  return (
    <>
      <SideNavbar />

      {/* Main layout container */}
      <div className="flex min-h-screen bg-white">
        {/* Sidebar on the left - hidden on mobile/tablet, shown on lg+ */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
          <SignSidebar />
        </div>

        {/* Form centered in remaining space */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <form onSubmit={handleSignIn} className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
            <div>
              <p className="text-sm text-gray-600">Welcome</p>
              <h1 className="text-2xl font-bold text-gray-800 mb-3">Sign in to your account</h1>

              {/* Google OAuth */}
              <GoogleOAuthProvider clientId="841039100434-obni419a8hk3bavrpirvjvingk3jblh6.apps.googleusercontent.com">
                <GoogleLogin 
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </GoogleOAuthProvider>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition"
            >
              Sign In
            </button>

            <Link to="/forget" className="text-sm   text-gray-600 underline hover:underline">Forget Password</Link>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/auth/signup" className="text-red-500 hover:underline">
                Sign up here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
