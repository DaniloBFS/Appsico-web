import React from 'react'
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
//Em caso de ter um logo, o código abaixo vai importar de Assets e jogar no Array
//import logo from '../../Assets/logo (1).png'

const Especialidade = () => {

    const [psicologos, setPsicologos] = useState([]);
    const [search, setSearch] = useState("");

    const psicologosCollectionRef = collection(db, "psicologos");
  
    useEffect(() => {
  
      const getPsicologos = async () => {
        const data = await getDocs(psicologosCollectionRef);
        setPsicologos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getPsicologos();
  
    }, []);

    const SearchPsi = (e) => {
      e.preventDefault();
      setPsicologos(psicologos.filter((psicologos) =>
        psicologos.nome.toLowerCase().includes(search.toLowerCase()) ||
        psicologos.abordagem.toLowerCase().includes(search.toLowerCase())

      ));

    };

  return (
    <div>
        
        <div className='searchDiv grid bg-greyIsh rounded-[10px] p-[2rem] py-12 my-12'>
          <form onSubmit= {(e) => {SearchPsi(e)}} className=''>
            <div className='firstDiv flex justify-between items-center rounded-[18px] gap[10px] bg-white p-4 shadow-lg shadow-greyIsh-700'>
              <div className='flex gap-2 items-center'> 
                <AiOutlineSearch className='text-[25px] icon' />
                
                <input onChange={(e)=>{setSearch(e.target.value)}}
                
                type="text" className='bg-transparent text-blue-500 focus:outline-none  w-[100%]' placeholder='Busque psicólogos...' />

              </div>
              <button type="submit" className='hidden lg:flex bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
                Buscar
              </button>
            </div>
          </form>
        </div>

      <div className="jobContainer flex gap-12 justify-center flex-wrap items-center py-10 mx-8">
        

       {psicologos.map(({id, nome, abordagem, convenio, descricao}) => {
          return(
                <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer">
                  {" "}
                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{nome}</h1>
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

