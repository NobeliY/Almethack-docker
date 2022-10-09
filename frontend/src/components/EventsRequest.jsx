import React from 'react';
import EventRequest from './EventRequest'
import PostService from '../API/PostService'

const EventsRequest = ({ events, setEvents }) => {
    const [isLoading, setIsLoading] = React.useState(false)
    
    const deleteEvent = (e, index) => {
        e.preventDefault();
        async function fetchData() {
            console.log('Отклонить')
            console.log({id: events[index].id, api_token: localStorage.getItem('api_token')})
            setIsLoading(true)
            const response = await PostService.deleteEventRequest({id: events[index].id, api_token: localStorage.getItem('api_token')});
            console.log(response.data)
            if (response.data.status_code === 200) {
                setEvents([...events, ...response.data.object]);   
            }
            setIsLoading(false)
        }
        fetchData();
    }

    const addEvent = (e, index) => {
        e.preventDefault();
        async function fetchData() {
            console.log('Принять')
            console.log({...events[index], api_token: localStorage.getItem('api_token')})
            const response = await PostService.addEventRequest({...events[index], api_token: localStorage.getItem('api_token')});
            console.log(response.data)
            if (response.data.status_code === 200) {
                setEvents([...events, ...response.data.object]);   
            }
        }
        fetchData();
    }

    return (
        <div className='container'>
            {events !== []
                ?
                events.map((event, index) => (
                    <EventRequest key={event.id + Math.random()} event={event} index={index} delEvent={deleteEvent} addEvent={addEvent}/>
                ))
                : <h1>Заявок нет</h1>
            }
        </div>
    );
};

export default EventsRequest;