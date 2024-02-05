'use client'

import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your login logic
    console.log('Username:', username);
    console.log('Password:', password);
    // For simplicity, let's just clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400 text-white">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Human Resources Information System</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
              className="w-full px-3 py-2 rounded bg-white text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full px-3 py-2 rounded bg-white text-white"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
