import AdminPage from '../pages/AdminPage';
import EventsList from '../pages/EventsList';
import Login from '../pages/Login';
import RequestsPage from '../pages/RequestsPage';

export const privateRoutes = [
    {path: '/admin', component: <AdminPage/>, exact: true},
    {path: '/events', component: <EventsList/>, exact: true},
    {path: '/request', component: <RequestsPage/>, exact: true},
]

export const publicRoutes = [
    {path: '/events', component: <EventsList/>, exact: true},
    {path: '/request', component: <RequestsPage/>, exact: true},
    {path: '/login', component: <Login/>, exact: true},
]