import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaEnvelope } from "react-icons/fa"
import SideNavbar from "../../components/sidenavbar/SideNavbar";

const Forget = () => {
    const[email, setEmail] = useState("")

    const handleSubmit = (e) => {  
       e.preventDefault() 
     }
  return (
    <>
    <SideNavbar/>
    <div className="flex min-h-screen bg-white">
     

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Link 
            to="/auth/signin" 
            className="flex items-center text-red-500 mb-6 hover:underline"
          >
            <FaArrowLeft className="mr-2" />
            Back to Sign In
          </Link>

          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Forgot Password?
              </h1>
              <p className="text-sm text-gray-600">
                Enter your email to receive a reset link
              </p>
            </div>

            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition flex items-center justify-center"
              >
                Send Reset Link
              </button>
            </form>

            <div className="text-center text-sm text-gray-600 pt-4">
              Remember your password?{" "}
              <Link to="/auth/signin" className="text-red-500 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Forget