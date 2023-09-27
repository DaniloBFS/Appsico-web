import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Components/FooterDiv/Footer.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      
        <Outlet />
     
      <Footer />
    </div>
  )
}


export default App
