import React from 'react'
import cl from './MyModal.module.scss';

function MyModal({children, visible}) {
    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}

export default MyModal