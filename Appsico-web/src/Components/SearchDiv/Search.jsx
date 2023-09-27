import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
  
    <div className='searchDiv grid bg-greyIsh rounded-[10px] p-[2rem]'>
      
      <form action="">

        <div className='firstDiv flex justify-between items-center rounded-[18px] gap[10px] bg-white p-4 shadow-lg shadow-greyIsh-700'>
    
          <div className='flex gap-2 items-center'> 
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none  w-[100%]' placeholder='Procure por psicólogos...' />
          </div>
        
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
            Buscar
          </button>
        
        </div>

      </form>
  
    </div>
  )
}


export default Search

