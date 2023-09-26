import React from 'react'

import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center'>
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>App</strong>sico
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          <strong>App</strong>sico is a platform that allows you to manage your apps.
        </p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Sobre Nós</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Funções</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Notícias</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Sobre Nós</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Funções</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Notícias</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Sobre Nós</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Funções</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Notícias</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div>
          <small className='text-[14px] text-white'>
            matstank@hotmail.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

