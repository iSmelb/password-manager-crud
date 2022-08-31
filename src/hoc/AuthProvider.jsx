import React, { createContext, useEffect, useState } from 'react'
import { User } from '../classes/User'

export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const usersFromLocal = localStorage.getItem('users')
    const activeUser = localStorage.getItem('user')
    const [user, setUser] = useState(JSON.parse(activeUser))
    const [users, setUsers] = useState(JSON.parse(usersFromLocal))
    const [error, setError] = useState('')
    
    const signUp = (userName, password) => {
        const existingUser = users.find(user => user.userName === userName)
        if(existingUser) {
            setError('User already exist')
            return 
        } 
        const newUser = new User(userName, password)
        setUsers([...users, newUser])
    }

    const signIn = (userName, password) => {
        const existingUser = users.find(user => user.userName === userName)
        if(existingUser && existingUser.password === password) {
            setUser(existingUser)
            return
        }
        setError('Wrong password or user nonexistent')
    }

    const signOut = () => {
        setUser(null)
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    },[users])
    
    useEffect(() => {
        if(!user) {
            localStorage.removeItem('user')
        } else {
            const userToUpdate = user.userName
            const updateUsers = users.map(userItem => ({
                ...userItem,
                itemsList: userItem.userName === userToUpdate ? user.itemsList : userItem.itemsList
            }))
            setUsers(updateUsers)
            localStorage.setItem('user', JSON.stringify(user))
        }
    },[user])
    
    const value = {user, setUser, error, signUp, signIn, signOut}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider