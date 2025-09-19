import React, { useState } from 'react';

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-4">
        
        {/* Left Side: Image Section */}
        <div className="hidden md:block md:w-1/2 p-8 bg-gray-100 flex items-center justify-center">
          <img 
            src="https://zerodha.com/static/images/landing.png" 
            alt="Zerodha Kite"
            className="max-w-xs mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/F3F4F6/3771C8?text=Kite'; }}
          />
          <img 
            src="https://zerodha.com/static/images/landing.png" 
            alt="Zerodha Kite"
            className="max-w-xs mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/F3F4F6/3771C8?text=Kite'; }}
          />
          <img 
            src="https://zerodha.com/static/images/landing.png" 
            alt="Zerodha Kite"
            className="max-w-xs mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/F3F4F6/3771C8?text=Kite'; }}
          />
        </div>

        {/* Right Side: Login Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <LoginForm />
        </div>
        
      </div>
    </div>
  );
}

// LoginForm Component
const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full p-10 md:p-0 ">
      <div className="text-center mb-8">
        <img 
          src="https://zerodha.com/static/images/logo.svg" 
          alt="Zerodha Logo" 
          className="w-24 mx-auto mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x28/FFFFFF/000000?text=Zerodha'; }}
        />
        <h1 className="text-2xl text-gray-700 font-light">Login to Kite</h1>
      </div>

      <form>
        {/* User ID Input */}
        <div className="mb-4">
          <label 
            htmlFor="userid" 
            className="block text-gray-600 text-sm mb-2"
          >
            User ID
          </label>
          <input
            id="userid"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="eg. AB1234"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-gray-600 text-sm mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="••••••••"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#387ed1] text-white py-2.5 rounded-md hover:bg-[#326eb9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
        >
          Login
        </button>
      </form>

      {/* Forgot Password Link */}
      <div className="text-center mt-6">
        <a href="#" className="text-sm text-[#387ed1] hover:underline">
          Forgot user ID or password?
        </a>
      </div>
      
      {/* Signup Link */}
      <div className="text-center mt-4">
         <p className="text-sm text-gray-500">
           Don't have an account? 
           <a href="#" className="text-[#387ed1] hover:underline ml-1">
             Signup now
           </a>
         </p>
      </div>
    </div>
  );
};
