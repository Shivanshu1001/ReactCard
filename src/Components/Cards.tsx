import React, { useState, useEffect } from 'react';

function Cards() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  // Handle feedback submission
  function handleFeedbackSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    console.log("Feedback submitted:", feedback);
  }

  return (
    <div className={`pl-5 pr-7 h-screen w-full overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <h1 className='text-red-700 text-4xl underline'>Welcome to this page!</h1>
        <h2 className='text-blue-500 text-2xl underline m-3'></h2>
        <h6>Typography + Data Entry + Feedback Components</h6>

        {/* Email Section */}
        <div className='m-3'>
          <label htmlFor="email" className="p-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input placeholder='Enter here...' id="email" type="email" className="bg-fuchsia-900 text-white p-2 rounded" />
          <button className='ml-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600'>
            Save
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400">We’ll never share your email with anyone else</p>
          <p className="text-[10px] text-gray-400 italic">Updated 2 days ago</p>
        </div>

        {/* Feedback Section */}
        <div className='flex justify-center items-center w-full'>
          <div className='m-3 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-md w-full'>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Your Feedback</h3>
            {submitted ? (
              <p className="text-green-600">Thank you for your feedback!</p>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <textarea
                  className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  rows={4}
                  placeholder="Type your feedback here..."
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
