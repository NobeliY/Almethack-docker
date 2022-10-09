import React from 'react';
import Event from './Event';

const Events = ({events}) => {

    return (
        <div className='container'>
            {events.map(event => (
                <Event key={event.id} event={event}/>
            ))}
        </div>
    );
};

export default Events;