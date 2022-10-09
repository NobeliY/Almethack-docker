import React from 'react';
import '../styles/App.css'
import Header from '../components/Header';
import MyButton from '../components/UI/Button/MyButton';
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader';
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext);
    const [login, setLogin] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [status, setStatus] = React.useState(false)

    const auth = event => {
        event.preventDefault();
        async function fetchData() {
            setStatus(false)
            setIsLoading(true)
            const response = await PostService.postAdminLogin(login, password);
            console.log(response.data)
            if (response.data.status_code == 200) {
                localStorage.setItem('api_token', `${response.data.object.api_token}`);
                localStorage.setItem('id', `${response.data.object.id}`);
                setIsAuth(true);
            } else if (response.data.status_code == 404) {
                setStatus(true)
            }
            setIsLoading(false)
        }
        fetchData()
    }

    const toLink = () => {
        return <Link to='/events'>Назад</Link>
    }

    return (
        <div>
            <Header>{toLink()}</Header>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={auth}>
                        <input type="text" placeholder="Логин" onChange={e => setLogin(e.target.value)} />
                        <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} />
                        {status ? <p>Не верный логин или пароль</p> : false}
                        <MyButton>{isLoading ? <Loader /> : "Войти"}</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;