import { Alert } from '@mui/material'
import React from 'react'
import BookmarkList from '../../components/bookmarkList/BookmarkList'
import useAuth from '../../hook/useAuth'
import './homePage.scss'

function HomePage() {
    const { user } = useAuth()
    
    return (
        <div className='homePage'>
            {user
                ? <BookmarkList />
                : <Alert
                    variant='filled'
                    severity='info'
                    sx={{ 
                        justifyContent: 'center',
                        maxWidth: '400px',
                        margin: '0 auto' 
                    }}
                >
                    Sign in to view the list of bookmarks
                </Alert>
            }
        </div>
    )
}

export default HomePage