import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from '../../firebase'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        }).catch(error => alert(error.message))
    }

    return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Whatsapp_logo.jpg' alt="" />
            <div className='login__text'>
                <h1>Sigh in to WhatsApp</h1>
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In With Google
            </Button>
            
        </div>
    </div>
    )
}

export default Login
