import React, { useState } from 'react'
import useSwitchPassword from '../../hook/useSwitchPassword'
import MyButton from '../UI/MyButton/MyButton'

function BookmarkItem({ bookmark, index, setCurrModalStatus, setItemForEdit, setItemForDelete }) {
    const [showPassword, onSwitch] = useSwitchPassword()
    const hidenPassword = Array(bookmark.password.length).fill('*').join('')

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
                <MyButton className='show' onClick={onSwitch}>show</MyButton>
                <MyButton className='edit' onClick={onEdit}>edit</MyButton>
                <MyButton className='delete' onClick={onDelete}>delete</MyButton>
            </div>
        </div>
    )
}

export default BookmarkItem
