import React from 'react';
import cls from './MyButton.module.css'

const MyButton = ({props, children, click}) => {
    return (
        <button {...props} className={cls.btn} onClick={click}>
            {children}
        </button>
    );
};

export default MyButton;