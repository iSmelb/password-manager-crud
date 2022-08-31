import React from 'react'
import LoginForm from '../../components/forms/LoginForm'
import useAuth from '../../hook/useAuth'
import { Alert } from '@mui/material'
import { Navigate } from 'react-router-dom'
import '../authPage.scss'

function LoginPage() {
    const { user, signIn, error } = useAuth()

    if (user) {
        return <Navigate to='/' />
    }

    return (
        <div className='loginPage conteiner'>
            <div className='head'>
                <h1>Login to your account</h1>
            </div>
            <LoginForm submitFunc={signIn} />
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

export default LoginPage