import React from 'react';

const Event = ({ event }) => {
    return (
        <div className='eventCard'>
            <div className='eventHeader'>
                <span className='manrope'>{event.type}</span>
                <span>{event.preview}</span>
                <h3>{event.name}</h3>
            </div>
            <div className='eventBody'>
                <div className='eventBody__img'>
                    <img src="" alt="" />
                </div>
                <div className='eventBody__dsc'>
                    <div>
                        <div>
                            <h4>Описание</h4>
                            <p>{event.description}</p>
                        </div>
                        <div>
                            <h4>Дата</h4>
                            <p>{event.datetime}</p>
                        </div>
                        <div>
                            <h4>Место</h4>
                            <p>{event.place}</p>
                        </div>
                    </div>
                    <p className='eventBody__price manrope'>{event.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;