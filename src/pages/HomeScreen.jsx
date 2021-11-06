import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes"; 

/**
  Estamos llegando aquí a partir del LoginRouter que es mi router principal por lo que el history lo podemos recibir 
como un prop, por ello hay que desestructurarlo
* @param {*} history 
* @returns 
 */
const HomeScreen = () => {

    //Recuperamos el context y el dispatch para poderlo modificar.
    const { dispatch } = useContext(AuthContext);
    //Recuperamos el history mediante useHistory
    const history = useHistory();
    const handelLogin = () => {
        //Usamos el dispatch para modificar el context y establecerlo en true.
        dispatch({ type: authTypes.login });

        history.push("/participantes");
    };

    return (
        <div className="container mt-5 text-center">
            <img src="assets/Tics.png" alt="Tics" className="img-fluid" width="480px" />
            <h1>Congreso de Tecnologías de la Información</h1>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-primary" onClick={handelLogin} type="button">Entrar</button>
            </div>
        </div>
    );
};
export default HomeScreen;