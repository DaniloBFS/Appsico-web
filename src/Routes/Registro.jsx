import React from "react";
import Registroform from "../Components/FormRegistro/FormRegistro.jsx";

const Registro = () => {
    return (
       <div className="flex w-full h-screen mt-20 mb-20" >
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <Registroform />
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full animate-spin"/>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
       </div>
    )
  }
  
  
  export default Registro