import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const signUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("paciente");

    const navigate = useNavigate();

    const options = [
        { value: 'paciente', label: 'Paciente' },
        { value: 'psicologo', label: 'Psicologo' },
      ]

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                storeUserRole(userCredential.user.uid, role)
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });  
    }; 

    const storeUserRole = async (userUuid, userRole) => {
        const storedUserRole = await addDoc(collection(db, "userRole"), {
            uuid: userUuid,
            role: userRole
        })
    }


    return (
       <div className="flex w-full h-screen my-32" >
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <div className="bg-white px-10 py-20 rounded-[10px] border-2 bordeer-gray">
            <h1 className='text-5xl font-semibold'>Bem vindo!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Por favor, insira suas credenciais</p>
            <form onSubmit={signUp}>
            <div className='mt-8'>
                
                <div>
                    <label className='text-lg font-medium'>Nome</label>
                    <input type="name"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Insira seu Nome'
                    />
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium'>Email</label>
                    <input type="email"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Insira seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium '>Senha</label>
                    <input type="password"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium '>Tipo</label>
                    <select name="selectType" id="selectType"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        {
                            options.map(item => <option key={item.value} value={item.value}>{item.label}</option>
                            )
                        }
                    </select>
                </div>

                {/* <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type="checkbox" 
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for="remember">Lembre-me</label>
                    </div>
               
                </div> */}
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blueColor text-white text-lg text font-bold'>Registrar</button>
                    {/* <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100'>
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                    </svg>

                        Registrar-se com Google
                    </button> */}
                </div>
            </div>
            </form>
       </div>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full animate-spin"/>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
       </div>
    )
  }
  
  
  export default signUp;