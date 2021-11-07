import React, { useState } from 'react'
/* import { useHistory } from 'react-router'; */

const Formulario = ({ dispatch }) => {

    //Agregamos un state para nuevo y update
    const [data, setData] = useState(
        {
            nombre: "",
            apellidos: "",
            email: "",
            ocupacion: "",
            twitter: "",
        }
    );



    //Desctructurar el state
    const { nombre, apellidos, email, twitter, ocupacion } = data;

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
            ocupacion,
        },
    };

  
    /*  const history = useHistory(); */
    //definir el metodo para agregar
    const handleAdd = () => {
            //Invocamos el dispatch, todo los dispatch van a tener referencia directa con el reducer a ejecutar , debemos pasarle un action
            dispatch(actionAdd);

            setData({
                nombre: "",
                apellidos: "",
                email: "",
                twitter: "",
            });
            window.location.href="/participantes";  

        /* history.push("/participantes"); 
        Falta esto....*/
    };



    return (
        <div>
            <h1 className="text-center">Registro de participante</h1>
            <hr />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10" style={{border:'solid blue'}}>
                    <div className="row">
                        <div className="col m-5">
                            <div className="card  bg-light shadow-lg p-3 mb-5 bg-white rounded">
                                <form className="row g-3 needs-validation m-2" role="form" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-6 position-relative mt-3">
                                            <label htmlFor="nombre" className="form-label"> <i className="fa fa-user text-info" /> Nombre :{" "} </label>
                                            <span className="material-icons-outlined"></span>
                                            <input onChange={handleChange} name="nombre" value={nombre} type="text" className="form-control" id="nombre" required autoComplete="on" placeholder="Nombre.." />
                                        </div>
                                        <div className="col-md-6 position-relative mt-3">
                                            <label htmlFor="apellidos" className="form-label"> <i className="fa fa-user text-info" /> Apellidos :{" "}</label>
                                            <input onChange={handleChange} name="apellidos" value={apellidos} type="text" className="form-control" id="apellidos" required autoComplete="on" placeholder="Apellidos.."/>
                                        </div>
                                        <div className="col-md-6 position-relative mt-3">
                                            <label htmlFor="email" className="form-label"><i className="fa fa-envelope text-info" /> Email: {" "}</label>
                                            <input onChange={handleChange} name="email" value={email} type="text" className="form-control" id="email" required  autoComplete="on" placeholder="correo@ejemplo.coms"/>
                                        </div>
                                        <div className="col-md-6 position-relative mt-3">
                                            <label htmlFor="ocupacion" className="form-label">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-badge mr-2 text-info" viewBox="0 0 16 16">
                                                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                                                </svg>
                                                Ocupación: {" "}</label>
                                            <input onChange={handleChange} name="ocupacion" value={ocupacion} type="text" className="form-control" id="ocupacion" required autoComplete="on" placeholder="Ocupación.."/>
                                        </div>
                                        <div className="col-md-12 position-relative">
                                            <label htmlFor="twitter" className="form-label">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mr-2 text-info" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                                Usuario en Twitter :{" "}</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                <input onChange={handleChange} name="twitter" value={twitter} type="text" className="form-control" id="twitter" aria-describedby="validationTooltipUsernamePrepend" required autoComplete="on" placeholder="ejemplo.."/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 position-relative">
                                        <button   onClick={handleAdd} className="btn btn-info btn-block my-4" type="submit">Guardar</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>



                   {/*  <div className="card  bg-light shadow-lg p-3 mb-5 bg-white rounded">
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
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input onChange={handleChange} name="twitter" value={twitter} type="text" className="form-control  form-control-lg mb-4" autoComplete="off" />
                                    {errorTwitter && <p className="text-danger">{errorTwitter}</p>}
                                </div>
                                <button onClick={handleAdd} className="btn btn-primary btn-block my-4" type="submit">Guardar</button>
                            </form>

                        </div>
                    </div> */}
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Formulario
