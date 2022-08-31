import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton'

function BookmarkItem({ bookmark, index, setCurrModalStatus, setItemForEdit, setItemForDelete }) {
    const [showPassword, setShowPassword] = useState(false)
    const hidenPassword = Array(bookmark.password.length).fill('*').join('')

    const onShow = () => {
        setShowPassword(prev => !prev)
    }

    const onEdit = () => {
        setItemForEdit(bookmark);
        setCurrModalStatus("edit")
    }

    const onDelete = () => {
        setItemForDelete(bookmark.id)
        setCurrModalStatus("delete")
    }
    
    return (
        <div className='BookmarkItem'>
            <div className='info'>
                <div className='number'>
                    {index + 1}.
                </div>
                <div className='title'>
                    {bookmark.account}
                </div>
                <div className='password'>
                    {showPassword
                        ? bookmark.password
                        : hidenPassword
                    }
                </div>
            </div>
            <div className='buttons'>
                <MyButton className='show' onClick={onShow}>show</MyButton>
                <MyButton className='edit' onClick={onEdit}>edit</MyButton>
                <MyButton className='delete' onClick={onDelete}>delete</MyButton>
                {/* <button onClick={onShow}>show</button>
                <button onClick={onEdit}>edit</button>
                <button onClick={onDelete}>delete</button> */}
            </div>
        </div>
    )
}

export default BookmarkItem
