import {signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from 'react';
import {auth} from "../../firebase";//ERRO INDICADO PELO NAVEGADOR
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,  password)
        .then((useCradential) => {
            console.log(useCradential)
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input 
                    type="email" 
                    placeholder='Entre com seu email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                    type="password" 
                    placeholder='Entre com sua senha' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default SignIn