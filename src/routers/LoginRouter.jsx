import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import AppRouter from './AppRouter';
const LoginRouter = () => {
    return (
        <Router>
            <AppRouter />

            <Switch>
                <Route exact path="/home" component={HomeScreen} />
            </Switch>
        </Router>
    );
};
export default LoginRouter;