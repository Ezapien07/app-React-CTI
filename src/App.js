import React, { useEffect, useReducer } from 'react';
import LoginRouter from './routers/LoginRouter';
import { AuthContext } from './context/AuthContext';
import { AuthReducer } from './reducers/AuthReducer';
//Definimos la función init, para intentar recuperar el estado del log desde el localstorage.
const init = () => {
    return JSON.parse(localStorage.getItem('log')) || { log: false }
};
const App = () => {
    //Definimos el context para toda la aplicación mediante el hook useContext.
    const [log, dispatch] = useReducer(AuthReducer, {}, init);
    //Definimos un hook useEffect para persistir el estado del log, cada vez que este cambie.
    useEffect(() => {
        localStorage.setItem('log', JSON.stringify(log));
    }, [log])
    //Usamos <AuthContext.Provider> para proveer el contexto a toda la aplicación, y mediante el dispatch poderlo  modificar
    return (
        <AuthContext.Provider value={{ log, dispatch }}>
            <LoginRouter />
        </AuthContext.Provider>
    )
}
export default App;