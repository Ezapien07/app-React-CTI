import React from 'react';
import Card from '../components/Card';
import {  Link } from 'react-router-dom';


const ParticipantesScreen = () => {

    const participantes = JSON.parse(localStorage.getItem("participantes"));//traer todos los participantes;  */
    /* var validacion=true; */
    /* var mensaje=''; */
    const array_participantes=[];
    function comprobarVacio(){
        if(participantes){
            /* validacion=false; */
            /* mensaje='No existen aun participantes'; */
        }
        else{
            /* validacion=true; */
        }
    }
    comprobarVacio();
    return (
        
        <div>
        <div className="row">
            <div className="col">
                <h1>Lista de partcipantes</h1>
            </div>
            <div className="col">
                <Link to="/registro" ><button className="btn btn-warning btn-lg">Agregar</button></Link>{/* 
            <button type="button" className="btn btn-outline-success float float-right" onClick={handleBack} >Agregar</button> */}
            </div>

            <hr />
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                {

                    participantes.forEach((p,index) => {
                        const person={};
                        person.index=index;
                        person.nombre=p.nombre;
                        person.apellidos=p.apellidos;
                        person.email=p.email;
                        person.twitter=p.twitter;
                        array_participantes.push(person);
                    }),
                    array_participantes.map((person) => (
                            <Card key={person} {...person} />
                        ))

                    }
            </div>
            <div className="col-2"></div>

        </div>
        </div>
    )
}
export default ParticipantesScreen;