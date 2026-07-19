import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleLogin() {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        formData,
      );
      alert("Login successfully");
    } catch (error) {
      console.log(error.response?.data);

      console.log(error.message);
      console.log(error);
    }
  }
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center text-2xl font-bold">
          <h1>Welcome Back!</h1>
        </div>
        <div className="m-5">
          <label>Email Address</label>
          <br />
          <input
            className="w-75 h-9 border-1 rounded-sm mt-1 mb-2 p-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="w-75 h-9 border-1 rounded-sm mt-1 mb-2 p-2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <p className="text-sm">Forgot Password?</p>
        </div>
        <div className="flex justify-between m-5 text-sm">
          <div className="flex flex-start">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p
            onClick={() => navigate("/signup")}
            className="text-indigo-700 cursor-pointer"
          >
            Create Account
          </p>
        </div>
        <div className="bg-indigo-600 h-9 flex items-center justify-center rounded-sm ml-4">
          <button onClick={handleLogin}
           className="text-white">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
