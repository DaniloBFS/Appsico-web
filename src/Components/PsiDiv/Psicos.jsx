import React from 'react';
//Em caso de ter um logo, o código abaixo vai importar de Assets e jogar no Array
//import logo from '../../Assets/logo (1).png'

const Data = [
  {
    id: 1,
    /*image: logo1, Aqui é aonde a imagem vai parar*/
    title: 'Convênio',
    location: '',
    desc: 'Nessa modalidade o paciente busca psicólogos que atendam por convênio.',
    company: 'Clinica Especialista Co.'
  },
  
  {
    id: 2,
    /*image: logo1,*/
    title: 'Particular',
    location: '',
    desc: 'Nessa modalidade o psicólogo irá cobrar por cada consulta ou criar pacotes.',
    company: 'Autônomo.'
  },
  
  {
    id: 3,
    /*image: logo1,*/
    title: 'Social',
    location: '',
    desc: 'Essa modalidade visa atender pacientes que não possam pagar por um convênio ou consulta particular.',
    company: 'Comunidade'
  },
  
]

const Psicos = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center flex-wrap items-center py-10 mx-8 font-bold text-xl"> Trabalhamos com três opções de atendimento:</div>
      <div className="jobContainer flex gap-12 justify-center flex-wrap items-center mx-8">
        

       {
        Data.map(({id, image, title, time, location, desc, company}) => {
          return(
                <div key={id} className="group group/item singleJob w-[250px] p-[20px]
                  bg-white rounded-[10px] hover:bg-blueColor 
                  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer">
                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  </span>
                  <h6 className='text-[#ccc]'>{location}</h6>
                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                  group-hover:text-white'>
                   {desc}
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


export default Psicos

