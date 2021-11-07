import React from 'react';
import Card from '../components/Card';
import Alerta from '../components/Alerta';
import { Link } from 'react-router-dom';


const ParticipantesScreen = () => {

    const participantes = JSON.parse(localStorage.getItem("participantes"));//traer todos los participantes;  */
    /* var validacion=true; */
    var mensaje = '';
    const array_participantes = [];
    const comprobarVacio=()=> {
        if (participantes.length) {
            return mensaje = '';
        }

        else {
            return mensaje = 'No existen aun participantes';
        }
    }
    mensaje=comprobarVacio();
    return (

        <div className="contianer-fluid">
            <div className="row">
                <div className="col">
                    <h1>Lista de partcipantes</h1>
                </div>
                <div className="col-2">
                    <Link to="/registro" ><button className="btn btn-warning btn-lg  btn-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus m-2" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Agregar</button></Link>{/* 
            <button type="button" className="btn btn-outline-success float float-right" onClick={handleBack} >Agregar</button> */}
                </div>

                <hr />
            </div>
            <div className="col-12 m-4" id="myDIV">
                <div className="row">
                    <h3>{mensaje}</h3>
                    {
                       
                        participantes.forEach((p, index) => {
                            const person = {};
                            person.index = index;
                            person.nombre = p.nombre;
                            person.apellidos = p.apellidos;
                            person.email = p.email;
                            person.twitter = p.twitter;
                            person.ocupacion = p.ocupacion;
                            array_participantes.push(person);
                        }),
                        array_participantes.map((person) => (
                            <Card key={person} {...person} />
                        ))

                    }
                </div>
            </div>
        </div>
    )
}
export default ParticipantesScreen;