import React from 'react'
import simple from '../../Assets/simple.png'
import simple2 from '../../Assets/simple2.png'
import simple3 from '../../Assets/simple3.png'
import { Link } from 'react-router-dom'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] flex  max-w-fit'>
        O valor de uma mente bem cuidada!
      </h1>

      <div className='flex flex-wrap flex-row items-center'>
        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Acolhimento
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
            Acolhimento é um dos mais importantes aspectos da mente. É o que
            acontece quando a mente está em um estado de acordo com o seu
            comportamento. 
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple2} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
             Comprometimento
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
          Tenha o suporte para manter a dedicação e a determinação alinhadas com seus objetivos e valores pessoais. Reforce sua seriedade e empenho em seguir seu caminho rumo à realização e ao sucesso na vida com comprometimento
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple3} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Profissionalismo
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
            Descubra nossa excepcional grade de psicólogos altamente qualificados, prontos para oferecer apoio emocional e orientação personalizada. Com profundo conhecimento e empatia, nossa classe de psicólogos está comprometida em ajudá-lo a alcançar bem-estar mental e equilíbrio emocional. Invista em seu crescimento pessoal com o suporte de profissionais dedicados à sua saúde mental.
          </p>
        </div>

      </div>
      
      <div className="card mt-[2rem] flex flex-wrap justify-between bg-blueColor p-[3rem] rounded-[10px]">

        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Pronto para escolher um Psicólogo?</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Vamos começar!</h2>
        </div>
          
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
           <Link to="/Psicologos"> Comece Agora</Link>
        </button>
        
      </div>
    </div>
  )
}


export default Value

