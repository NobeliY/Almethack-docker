import React from 'react';
import cls from './RequestInput.module.css'

const RequestInput = ({children, setValue, width, ...props}) => {
    return (
        <div {...props} className={cls.reqInput}>
            <span>{children}</span>
            <input style={{'width': width}}  type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default RequestInput;