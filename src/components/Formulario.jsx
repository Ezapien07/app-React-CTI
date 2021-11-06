import React, { useState } from 'react'
/* import { useHistory } from 'react-router'; */

const Formulario = ({ dispatch }) => {

    //Agregamos un state para nuevo y update
    const [data, setData] = useState(
        {
            nombre: "",
            apellidos: "",
            email: "",
            twitter: "",
        }
    );

    //use state de error
    const [errorNombre, setErrorNombre] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorTwitter, setErrorTwitter] = useState("");

    //Desctructurar el state
    const { nombre, apellidos, email, twitter } = data;

    //Definir la funcion handleChange
    const handleChange = (e) => {
        //modifcamos el estado
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        );
    };

    const actionAdd = {
        type: "add",
        payload: {
            nombre,
            apellidos,
            email,
            twitter,
        },
    };

    //validación de datos
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
   /*  const history = useHistory(); */
    //definir el metodo para agregar
    const handleAdd = () => {
        try {
            if (!validacionDatos()) {
                return;
            }
            //Invocamos el dispatch, todo los dispatch van a tener referencia directa con el reducer a ejecutar , debemos pasarle un action
            dispatch(actionAdd);
           
            setData({
                nombre:"",
                apellidos:"",
                email:"",
                twitter:"",
            });
            
        } catch (error) {
            
        }
         
        /* history.push("/participantes"); 
        Falta esto....*/
    };



    return (
        <div>
            <h1 className="text-center">Registro de participante</h1>
            <hr />
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="card  bg-light shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <form className="border border-light p-5">
                                <label className="mx-1 d-grid gap-2">Nombre: {" "}</label>
                                <input onChange={handleChange} name="nombre" value={nombre} type="text" className="form-control  form-control-lg mb-4" autoComplete="off" placeholder="Nombre.." />
                                {errorNombre && <p className="text-danger">{errorNombre}</p>}
                                <label className="mx-1 d-grid gap-2">Apellidos: {" "}</label>
                                <input onChange={handleChange} name="apellidos" value={apellidos} type="text" className="form-control  form-control-lg mb-4" autoComplete="off" placeholder="Apellidos.." />
                                {errorApellido && <p className="text-danger">{errorApellido}</p>}
                                <label className="mx-1 d-grid gap-2">Email: {" "}</label>
                                <input onChange={handleChange} name="email" value={email} type="email" className="form-control  form-control-lg mb-4" autoComplete="off" placeholder="correo@ejemplo.com" />
                                {errorEmail && <p className="text-danger">{errorEmail}</p>}
                                <label className="mx-1 d-grid gap-2">Twitter: {" "}</label>
                                <input onChange={handleChange} name="twitter" value={twitter} type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                {errorTwitter && <p className="text-danger">{errorTwitter}</p>}
                                <button onClick={handleAdd} className="btn btn-primary btn-block my-4" type="submit">Guardar</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Formulario
