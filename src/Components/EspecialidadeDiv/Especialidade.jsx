import React from 'react'
import { BiTimeFive} from 'react-icons/bi'
//Em caso de ter um logo, o código abaixo vai importar de Assets e jogar no Array
//import logo from '../../Assets/logo (1).png'

const Data = [
  {
    id: 1,
    /*image: logo1, Aqui é aonde a imagem vai parar*/
    title: 'Convênio',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 2,
    /*image: logo1,*/
    title: 'Particular',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 3,
    /*image: logo1,*/
    title: 'Social',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  {
    id: 1,
    /*image: logo1, Aqui é aonde a imagem vai parar*/
    title: 'Convênio',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 2,
    /*image: logo1,*/
    title: 'Particular',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 3,
    /*image: logo1,*/
    title: 'Social',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  {
    id: 1,
    /*image: logo1, Aqui é aonde a imagem vai parar*/
    title: 'Convênio',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 2,
    /*image: logo1,*/
    title: 'Particular',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 3,
    /*image: logo1,*/
    title: 'Social',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  {
    id: 1,
    /*image: logo1, Aqui é aonde a imagem vai parar*/
    title: 'Convênio',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 2,
    /*image: logo1,*/
    title: 'Particular',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 3,
    /*image: logo1,*/
    title: 'Social',
    time: 'Lorem',
    location: 'Lorem ipsum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.',
    company: 'Clinica Especialista Co.'
  },
  
]

const Especialidade = () => {
  return (
    <div>
      <div className="jobContainer flex gap-12 justify-center flex-wrap items-center py-10 mx-8">
        

       {
        Data.map(({id, image, title, time, location, desc, company}) => {
          return(
                <div key={id} className="group group/item singleJob w-[250px] p-[20px]
                  bg-white rounded-[10px] hover:bg-blueColor 
                  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer">
                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] '>
                  <BiTimeFive />{time}
                  </span>
                  </span>
                  <h6 className='text-[#ccc]'>{location}</h6>
                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                  group-hover:text-white'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum adipisci deleniti.
                  </p>
                  <div className='company flex items-center gap-2'>
                  {/*  <img src={image} alt="Não tem" className='w-[10%]' />*/}
                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                  </div>
                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
                  font-semibold text-textColor hover:bg-blueColor group-hover/item:text-textColor group-hover:text-white'>
                    Saiba mais
                  </button>
                  </div>
          )
       })
      }


      </div>
    </div>
  )
}


export default Especialidade

