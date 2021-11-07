import React from 'react';
import { Route } from 'react-router';
/**
* 
* @param {*} component: Representa el componente que vamos a renderizar notar que se debe renombrar como 
Component
* @returns 
*/
const PrivateRouter = ({ auth, component: Component, ...rest }) => {
    return <Route {...rest} component={() => <Component />} />
};
export default PrivateRouter;