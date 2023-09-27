import React from 'react'
import Search from '../Components/SearchDiv/Search.jsx'
import Psicos from '../Components/PsiDiv/Psicos.jsx'
import Value from '../Components/ValueDiv/Value.jsx'
import Inicio from '../Components/InicioDiv/InicioDiv.jsx'


const Home = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      
      <Inicio />
      <Search />
      <Psicos />
      <Value />

    </div>
  )
}


export default Home
