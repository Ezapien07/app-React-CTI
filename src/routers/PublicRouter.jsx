import React from 'react';
import { Redirect, Route } from 'react-router';
/**
* 
* @param {*} component: Representa el componente que vamos a renderizar notar que se debe renombrar como 
Component
* @returns 
*/
const PrivateRouter = ({ auth, component: Component, ...rest }) => {
    return (
        //Protejemos la ruta verificando el valor de auth si es false cargamos el login de lo contrario redireccionamos a  login
        <Route {...rest}
            component={(props) => auth.log ? <Component {...props} /> : <Redirect to="/home" />} />
    );
};
export default PrivateRouter;