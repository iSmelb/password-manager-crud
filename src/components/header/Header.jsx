import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import './header.scss'

function Header() {
    const { user, signOut } = useAuth()

    return (
        <header className='header'>
            <div className='header_flex conteiner'>
                <div className='dashboard'>
                    <Link to='/'>Dashboard</Link>
                </div>
                <div className='loginPanel'>
                    {user
                        ? <div className='userFalse'>
                            <button className='logOut' onClick={signOut}>Log out</button>
                        </div>
                        : <div className='userTrue'>
                            <Link to='login'>Login</Link>
                            <Link to='register'>Sign up</Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header