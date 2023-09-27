import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import Search from './Components/SearchDiv/Search.jsx'
import Psicos from './Components/PsiDiv/Psicos.jsx'
import Value from './Components/ValueDiv/Value.jsx'
import Footer from './Components/FooterDiv/Footer.jsx'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Psicos />
      <Value />
      <Footer />
    </div>
  )
}


export default App
