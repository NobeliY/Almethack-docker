import React from 'react';
import cls from './RequestTextArea.module.css'

const RequestTextArea = ({children, setValue, width, height, ...props}) => {
    return (
        <div {...props} className={cls.reqTextArea}>
            <span>{children}</span>
            <textarea style={{'width': width, 'height': height}}  type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default RequestTextArea;