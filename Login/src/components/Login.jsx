import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-h-50 w-sm bg-blue-600">
        <div className='flex justify-center text-2xl font-bold'>
          <h1>Welcome Back!</h1>
        </div>
        <div className='m-5'>
          <label>Email Address</label>
          <br/>
          <input type="email" placeholder="Enter your email" />
          <br/>
          <label>Password</label>
          <br/>
          <input type="password" placeholder="Enter your password" />
        </div>
      </div>
    </div>
  );
}

export default Login;
