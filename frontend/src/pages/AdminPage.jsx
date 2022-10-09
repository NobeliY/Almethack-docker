import React from 'react';
import Header from '../components/Header';
import EventsRequest from '../components/EventsRequest'
import PostService from '../API/PostService'
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [events, setEvents] = React.useState([])


    React.useEffect(() => {
        async function fetchData() {
            const response = await PostService.getRequstEvents();
            setEvents([...events, ...response.data]);
        }
        fetchData();
    }, []);


    const toLink = () => {
        return <Link to='/events'>Назад</Link>
    }


    return (
        <div className='eventsList'>
            <Header>{toLink()}</Header>
            <EventsRequest events={events} setEvents={setEvents} isAdmin={true}/>
        </div>
    );
};

export default AdminPage;