import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/Routes";
import {AuthContext} from "../context/AuthContext";
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to ="/events" />}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to ="/events" />}/>
            </Routes>
    );
};

export default AppRouter;