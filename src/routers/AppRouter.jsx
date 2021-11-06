import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EditScreen from '../pages/EditScreen';
import RegistroScreen from '../pages/RegistroScreen';
import ParticipantesScreen from '../pages/ParticipantesScreen';
const AppRouter = () => {
    return (
        <>
            <Navbar />
            
            <Switch>
            <Route exact path="/participantes" component={ParticipantesScreen} />
            <Route exact path="/registro" component={RegistroScreen} />
            <Route exact path="/edit:index" component={EditScreen} />
                {/*Con <Redirect> hacemos que en la ruta / nos redirija la ruta por defecto que queramos */}
                <Redirect to="/home" />
            </Switch>
        </>
    );
};
export default AppRouter;
