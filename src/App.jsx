import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Dashboard from './Dashboard';
import './App.css';



function Home() {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Button clicked");
    navigate('/dashboard'); // Navigate to the dashboard
  }

  return (
      <div className='main items-center flex  justify-center h-screen'>
         <div className='container m-auto w-auto p-10  flex flex-col gap-5 border rounded-md border-grey-700 flex justify-center align-middle sm:w-96'>
          <input className='border  pt-2 pb-2 rounded-md border-grey-900' type='text'  placeholder='Enter email' />
           <button className='bg-black pt-2 pb-2 rounded-md  text-white' onClick={handleClick}>Analyze</button>
         </div>
      </div>
  )
}


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
