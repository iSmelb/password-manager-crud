import React, { useState } from 'react'
import { ListItem } from '../../classes/ListItem'
import { Alert } from '@mui/material'
import useAuth from '../../hook/useAuth'
import ItemForm from '../forms/ItemForm'
import MyButton from '../UI/MyButton/MyButton'
import MyModal from '../UI/MyModal/MyModal'
import BookmarkItem from './BookmarkItem'

function BookmarkList() {
    const { user, setUser } = useAuth()
    const [itemForEdit, setItemForEdit] = useState(null)
    const [currModalStatus, setCurrModalStatus] = useState('');
    const [itemToDelete, setItemToDelete] = useState(null)

    const createItem = (data) => {
        const newPost = new ListItem(data.account, data.password, user.itemsList)
        setUser(prev => ({ ...prev, itemsList: [...prev.itemsList, newPost] }))
    }

    const editItem = (data) => {
        const updateList = user.itemsList.map(item => ({
            ...item,
            account: item.id === itemForEdit?.id ? data.account : item.account,
            password: item.id === itemForEdit?.id ? data.password : item.password
        }))
        setUser(prev => ({ ...prev, itemsList: updateList }))
        setItemForEdit(null)
    }

    const deleteItem = () => {
        const updateList = user.itemsList.filter(item => item.id !== itemToDelete)
        setUser(prev => ({ ...prev, itemsList: updateList }))
        setItemToDelete(null)
        setCurrModalStatus('')
    }

    const modalF = {
        add: createItem,
        edit: editItem,
        delete: deleteItem,
        cancel: () => {
            setCurrModalStatus('')
            setItemToDelete(null)
            setItemForEdit(null)
        }
    }

    return (
        <div className='bookmarkList'>
            <div className='createItem'>
                <MyButton onClick={() => setCurrModalStatus('add')}>Create item</MyButton>
            </div>
            {currModalStatus &&
                <MyModal visible={currModalStatus}>
                    {itemToDelete
                        ? <div className='deletePanel'>
                            <h4>Delete item?</h4>
                            <MyButton onClick={modalF[currModalStatus]}>Yes</MyButton>
                            <MyButton onClick={modalF.cancel}>No</MyButton>
                        </div>
                        : <ItemForm
                            submitFunc={modalF[currModalStatus]}
                            cancelFunc={modalF.cancel}
                            itemForEdit={itemForEdit}
                        />
                    }
                </MyModal>
            }
            {user.itemsList.map((item, index) =>
                <BookmarkItem
                    key={item.id}
                    bookmark={item}
                    index={index}
                    setCurrModalStatus={setCurrModalStatus}
                    setItemForEdit={setItemForEdit}
                    setItemForDelete={setItemToDelete}
                />)
            }
            {!user.itemsList.length && <Alert
                variant='filled'
                severity='info'
                sx={{
                    justifyContent: 'center',
                    maxWidth: '400px',
                    margin: '0 auto'
                }}
            >
                Your bookmark list is empty
            </Alert>}
        </div>
    )
}

export default BookmarkList
