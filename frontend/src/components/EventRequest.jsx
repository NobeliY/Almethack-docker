import React from 'react';
import MyButton from './UI/Button/MyButton';
import Loader from './UI/Loader/Loader'

const EventRequest = ({ event, index, delEvent, addEvent, isLoading }) => {
    return (
        <div className='eventCard'>
            <div className='eventHeader'>
                <span className='manrope'>{event.type}</span>
                <span>{event.preview}</span>
                <h3>{event.name}</h3>
            </div>
            <div className='eventBody'>
                <div className='eventBody__img'>
                </div>
                <div className='eventBody__dsc'>
                    <div>
                        <div>
                            <h4>Описание</h4>
                            <p>{event.description}</p>
                        </div>
                        <div>
                            <h4>Дата</h4>
                            <p>{event.date}</p>
                        </div>
                        <div>
                            <h4>Время</h4>
                            <p>{event.time}</p>
                        </div>
                        <div>
                            <h4>Место</h4>
                            <p>{event.place}</p>
                        </div>
                    </div>
                    <p className='eventBody__price manrope'>{event.price}</p>
                </div>
            </div>
            <div className='eventBody'>
                <div className='eventBody__btns'>
                    <form onSubmit={(e)=> addEvent(e, index)}>
                        <MyButton>{isLoading ? <Loader /> : 'Одобрить'}</MyButton>
                    </form>
                    <form onSubmit={(e)=>delEvent(e, index)}>
                        <MyButton>{isLoading ? <Loader /> : 'Отклонить'}</MyButton>
                    </form>
                </div>
                <div className='eventBody__dsc'>
                    <div>
                        <div>
                            <h4>Email:</h4>
                            <p>{event.email}</p>
                        </div>
                        <div>
                            <h4>Телефон:</h4>
                            <p>{event.phone}</p>
                        </div>
                        <div>
                            <h4>Заявитель:</h4>
                            <p>{event.full_name}</p>
                        </div>
                        <div>
                            <h4>Наименование организации:</h4>
                            <p>{event.organization_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventRequest;