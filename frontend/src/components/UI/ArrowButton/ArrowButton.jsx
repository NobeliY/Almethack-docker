import React from 'react';
import cls from './ArrowButton.module.css'

const ArrowButton = ({arrow, isRight}) => {
    const ellipsClasses = [cls.ellips]
    const arrowClasses = [cls.arrow]
    if (isRight) {
        arrowClasses.push(cls.arrowRight)
        ellipsClasses.push(cls.right)
    } else {
        arrowClasses.push(cls.arrowLeft)
        ellipsClasses.push(cls.left)
    }

    return (
        <div className={ellipsClasses.join(' ')}>
            <img src={arrow} alt="" className={arrowClasses.join(' ')}/>
        </div>
    );
};

export default ArrowButton;