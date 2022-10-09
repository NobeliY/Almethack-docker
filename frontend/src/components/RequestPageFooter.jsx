import React from 'react';
import RequestInput from './UI/RequestInput/RequestInput'

const RequestPageFooter = ({setDate, setPreview, setPrice, setTime, changeValue, value}) => {
    return (
        <div className='requestPageFooter'>
            <div className='requestPageFooter__radio'>
                <span>Платно/Бесплатно:</span>
                <div className='requestPageFooter__input'>
                    <div>
                        <input
                            type="radio"
                            value={1}
                            checked={value === '1' ? true : false}
                            onChange={changeValue}
                        />
                        <span>Платно</span>
                    </div>
                    <div>
                        <input type="radio"
                            value={2}
                            checked={value === '2' ? true : false}
                            onChange={changeValue}
                        />
                        <span>Бесплатно</span>
                    </div>
                </div>
                <RequestInput setValue={setDate} width={'100%'} >Дата мероприятия:</RequestInput>
            </div>
            <div className='requestPageFooter__radio'>
                <RequestInput setValue={setTime} width={'100%'} >Время мероприятия:</RequestInput>
                {value == 1
                    ? <RequestInput setValue={setPrice} width={'100%'} >Цена:</RequestInput>
                    : false
                }
            </div>
            <div className='requestPageFooter__radio'>
                <RequestInput setValue={setPreview} width={'100%'} >Подзаголовок мероприятия:</RequestInput>
            </div>
        </div>
    );
};

export default RequestPageFooter;