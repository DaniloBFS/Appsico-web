import React from 'react'


const Inicio = () => {
  return (
          <div className="flex py-32  w-full" >
            <div className="w-full flex flex-wrap items-center justify-center lg:w-1/2">
              <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] text-center'>
                Seja bem vindo(a) <br /> ao Appsico! 
              </h1>
             
              <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-greyIsh border-blueColor'>
                <a href="/Psicologos"> Comece Agora</a>
              </button>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 " />
            </div>
          </div>
  )
}

export default Inicio

