import React, { useEffect, useReducer } from 'react'
import Formulario from '../components/Formulario';
import { ParticipantesReducer } from '../Reducer/ParticipantesReducer';

//Definimos la funcion init . donde vamos poder hacer todo lo necesario para crear el localstorage
const init=()=>{
    //Definimos el localStorage
    const participantes=localStorage.getItem("participantes");
    return participantes ? JSON.parse(participantes) : []; //? para un if de vacio
}

const RegistroScreen = () => {
    const [state,dispatch]=useReducer(ParticipantesReducer,[],init);

    useEffect(() => {
        //Actulizamos el localStorage
        localStorage.setItem("participantes",JSON.stringify(state));
    }, [state])


    return (
        <div>
            <Formulario dispatch={dispatch}/>
        </div>
    )
}

export default RegistroScreen
