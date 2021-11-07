import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';

const EditScreen = () => {
    /* console.log(index); */
    function HeaderView() {
        let location = useLocation();
        return location.pathname
    }

    const ubicacion = HeaderView();
    const ubi = ubicacion.split(':');
    const pos = ubi[1];



    const participantes = JSON.parse(localStorage.getItem("participantes"));
    var participante = new Object();
    function buscarParticipante() {
        participantes.forEach((p, i) => {
            if (i == pos) {
                participante = p;
            }
        });
    }
    buscarParticipante();
    const [data, setData] = useState(
        {
            nombre: participante.nombre,
            apellidos: participante.apellidos,
            email: participante.email,
            twitter: participante.twitter,
            ocupacion:participante.ocupacion,
        }
    );
    const { nombre, apellidos, email, twitter,ocupacion } = data;

    const [errorNombre, setErrorNombre] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorTwitter, setErrorTwitter] = useState("");
    const [errorOcupacion,setErroOcuapcion]=useState("");

    const handleChange = (e) => {
        //modifcamos el estado
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            },
            console.log(data)
        );
    };

    const validacionDatos = () => {
        setErrorNombre("");
        setErrorTwitter("");
        setErrorApellido("");
        setErrorEmail("");

        let valido = true;

        if (!nombre.trim()) {
            setErrorNombre("Debes registrar un nombre");
            valido = false;
        }
        if (!apellidos.trim()) {
            setErrorApellido("Debes registrar un apellido");
            valido = false;
        }
        if (!email.trim()) {
            setErrorEmail("Debes registrar un correo");
            valido = false;
        }
        if (!twitter.trim()) {
            setErrorTwitter("Debes registrar un twitter");
            valido = false;
        }

        return valido;
    };
    const history = useHistory();

    //definir el metodo para modificar
    const handleUp = () => {
        if (!validacionDatos()) {
            return;
        }
        participante.nombre = nombre;
        participante.apellidos = apellidos;
        participante.email = email;
        participante.twitter = twitter;
        participante.ocupacion=ocupacion;

        participantes.forEach((p, i) => {
            if (i == pos) {
                console.log(typeof p);
                p['nombre'] = participante.nombre;
                console.log(p);
                p['apellidos'] = participante.apellidos;
                p['email'] = participante.email;
                p['twitter'] = participante.twitter;
                p['ocupacion']=participante.ocupacion;
            }
        });
        localStorage.setItem("participantes", JSON.stringify(participantes));

            //Usamos el dispatch para modificar el context y establecerlo en true.

            history.push("/participantes");

    };
    return (
        <div>
            <h1>Editar participantes</h1>
            <hr />
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">

                    <div className="card  bg-light shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <form className="border border-light p-5">
                                <label htmlFor="txtNombre" className="display-6">Nombre:</label>
                                <input
                                    onChange={handleChange}
                                    name="nombre" value={nombre}
                                    type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorNombre && <p className="text-danger">{errorNombre}</p>}
                                <label htmlFor="txtApe" className="display-6">Apellidos:</label>
                                <input
                                    onChange={handleChange}
                                    name="apellidos" value={apellidos}
                                    type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorApellido && <p className="text-danger">{errorApellido}</p>}
                                <label htmlFor="txtEmail" className="display-6">Email:</label>
                                <input
                                    onChange={handleChange}
                                    name="email" value={email}
                                    type="email" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorEmail && <p className="text-danger">{errorEmail}</p>}
                                <label htmlFor="textarea" className="display-6">Twitter:</label>
                                <input
                                    onChange={handleChange}
                                    name="twitter" value={twitter}
                                    type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorTwitter && <p className="text-danger">{errorTwitter}</p>}
                                <label htmlFor="textarea" className="display-6">Twitter:</label>
                                <input
                                    onChange={handleChange}
                                    name="ocupacion" value={ocupacion}
                                    type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorOcupacion && <p className="text-danger">{errorOcupacion}</p>}
                                <button onClick={handleUp} className="btn btn-primary btn-block my-4" type="submit">Guardar</button>
                            </form>

                        </div>
                    </div>

                </div>
                <div className="col-2"></div>


                {/*  {
                        mens.map((men) => (
                            <Card key={men.id} {...men} />
                        ))

                    } */}
            </div>
        </div>
    )
}

export default EditScreen
