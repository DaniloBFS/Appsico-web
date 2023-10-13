import React from "react";

const Form = () => {
    return (
       <div>
            <h1 className='text-5xl'>Bem vindo de volta!</h1>
            <p>Bem vindo! Por favor insira suas credenciais</p>
            <div>
                <div>
                    <label>Email</label>
                    <input 
                        className=''
                        placeholder='Insira seu email'
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input 
                        className=''
                        placeholder='Insira sua senha'
                        type="password"
                    />
                </div>
                <div>
                    <div>
                        <input 
                            type="checkbox" 
                            id='remember'
                        />
                        <label for="remember">Lembre-me</label>
                    </div>
                    <button>Esqueci a senha</button>
                </div>
            </div>
       </div>
    )
  }
  
  
  export default Form