import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const signIn = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });  
    };

    return (
       <div className="flex w-full h-screen my-12">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <div className="bg-white px-10 py-20 rounded-[10px] border-2 border-gray">
            <h1 className='text-5xl font-semibold'>Bem vindo de volta!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Bem vindo! Por favor insira suas credenciais</p>
           
            <form onSubmit={signIn}>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input type="email"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Insira seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-lg font-medium '>Senha</label>
                    <input type="password"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type="checkbox" 
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for="remember">Lembre-me</label>
                    </div>
                    <button type="submit" className='font-medium text-base text-blueColor'>Esqueci a senha</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'> 
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blueColor text-white text-lg text font-bold'>Entrar</button>
                </div>

                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Não tem uma conta?</p>
                    <button 
                        
                        className='ml-2 font-medium text-base text-blue-500'>Registre-se</button>
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
  
  
  export default signIn;
