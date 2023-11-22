import React from 'react'
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from "react";
//Em caso de ter um logo, o código abaixo vai importar de Assets e jogar no Array
//import logo from '../../Assets/logo (1).png'

const Especialidade = () => {

    const [psicologos, setPsicologos] = useState([]);
    const psicologosCollectionRef = collection(db, "psicologos");
  
    useEffect(() => {
  
      const getPsicologos = async () => {
        const data = await getDocs(psicologosCollectionRef);
        setPsicologos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getPsicologos();
  
    }, []);

  return (
    <div>

      <div className="jobContainer flex gap-12 justify-center flex-wrap items-center py-10 mx-8">
        

       {psicologos.map(({id, nome, abordagem, convenio, descricao}) => {
          return(
                <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer">
                  {" "}
                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{nome}</h1>
                    <span className='flex items-center text-[#ccc] '></span>
                  </span>
                  
                  <h6 className='text-[#ccc]'>Abordagem: {abordagem}</h6>
                  
                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                    {descricao}
                  </p>
                 
                  <div className='company flex items-center gap-2'>
                  {/*  <img src={image} alt="Não tem" className='w-[10%]' />*/}
                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{convenio}</span>
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


export default Especialidade;

