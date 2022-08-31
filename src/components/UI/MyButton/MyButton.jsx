import React from 'react';
import classes from './MyButton.module.scss'

function MyButton({ children, ...props }) {
    const propClassname = props.className ? props.className : ''
    return (
        <button {...props} className={`${classes.myBtn} ${classes[propClassname]}`}>
            {children}
        </button>
    )
}

export default MyButton;