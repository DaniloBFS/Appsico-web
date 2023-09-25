import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>App</strong>sico
          </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Psicólogos</li>
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Convênios</li>
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Sobre</li>
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Contato</li>
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Registre-se</li>
        <li className="menuList text-[#6f6f6f]" hover:text-blueColor>Login</li>
      </div>
    </div>
  )
}


export default NavBar
