import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';


const AuthData = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect (() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign Out Successfull')
        }).catch(error => console.log(error))
    }

    return (
        <div>{ authUser ? <><p>{`Logado como ${authUser.email}`}</p><button onClick={userSignOut}>Sair da Conta</button></> : <p>Signed Out</p>}</div>
    )
}

export default AuthData;