import React from 'react'
import RegisterForm from '../../components/forms/RegisterForm'
import useAuth from '../../hook/useAuth'
import { Alert } from '@mui/material'
import { Navigate } from 'react-router-dom'
import '../authPage.scss'

function SignUpPage() {
    const {user, signUp, error} = useAuth()

    if (user) {
        return <Navigate to='/'/>
    }

    return (
        <div className='signUpPage conteiner'>
            <div className='head'>
                <h1>Create new account</h1>
            </div>
            <RegisterForm submitFunc={signUp}/>
            {error && <Alert
                severity='error'
                variant='filled'
                sx={{
                    justifyContent: 'center',
                    maxWidth: '400px',
                    margin: '40px auto 0'
                }}
            >
                {error}
            </Alert>}
        </div>
    )
}

export default SignUpPage