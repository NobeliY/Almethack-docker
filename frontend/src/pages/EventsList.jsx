import React from 'react';
import Events from '../components/Events';
import Header from '../components/Header';
import Slider from '../components/Slider';
import PostService from '../API/PostService'
import {useEvents} from '../hooks/useEvents'
import EventFilter from '../components/EventFilter';
import {AuthContext} from '../context/AuthContext'
import { Link, useNavigate } from "react-router-dom";
import Loader from '../components/UI/Loader/Loader'

const EventsList = () => {
    const router = useNavigate();
    const {isAuth, setIsAuth} = React.useContext(AuthContext);
    const [filter, setFilter] = React.useState({ sort: '', query: '' });
    const [events, setEvents] = React.useState([])
    const sortedAndSearchedEvents = useEvents(events, filter.sort, filter.query);


    React.useEffect(() => {
        async function fetchData() {
            const response = await PostService.getAll();
            setEvents([...events, ...response.data]);
        }
        fetchData();
    }, []);

    const clearStorage = () => {
        setIsAuth(false);
    }

    const toLink = () => {
        if (isAuth) {
            return <Link to='/events' onClick={clearStorage}>Выйти</Link>
        } else {
            return <Link to='/login'>Войти</Link>
        }
    }

    return (
        <div className='eventsList'>
            <Header isList={true}>{toLink()}</Header>
            <Slider />
            <EventFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Events events={sortedAndSearchedEvents} isAdmin={false}/>
        </div>
    );
};

export default EventsList;