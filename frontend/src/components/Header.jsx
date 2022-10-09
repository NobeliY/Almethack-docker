import React from 'react';
import { Link, Route } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import MyButton from './UI/Button/MyButton';

const Header = ({ children, isList }) => {
    const router = useNavigate();
    const { isAuth, setIsAuth } = React.useContext(AuthContext);

    return (
        <div className='header'>
            {isList
                ? isAuth
                    ? <div className='header__two'>
                        <MyButton>
                            <Link to='/admin'>заявки</Link>
                        </MyButton>
                        <MyButton>
                            <Link to='/request'>Предолжить мероприятие</Link>
                        </MyButton>
                    </div>
                    :
                    <div className='header__two'>
                        <MyButton>
                            <Link to='/request'>Предолжить мероприятие</Link>
                        </MyButton>
                    </div>
                : false
            }
            <MyButton>
                {children}
            </MyButton>
        </div>
    );
};

export default Header;