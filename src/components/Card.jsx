import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ index,nombre,email,twitter ,apellidos}) => {
    const num=Math.floor(Math.random() * (12 - 1) + 1);
    const path = `/assets/${num}.png`;}
    const ruta=`https://twitter.com/usuario${twitter}`;

    console.log(index);

    return (
        <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
                {/* end row */}
                <div className="row">
                    <div className="container-fluid">
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-auto float float-left" >
                                    <img  src={path} alt="Congreso" className="rounded-circle img-fluid" width="80px"/>
                                    </div>
                                <div className>
                                    <h4>{nombre}  {apellidos}</h4>
                                </div>
                                <Link title data-placement="top" href={ruta}  data-toggle="tooltip" className="tooltips text-primary" href data-original-title="Twitter">
                                    <i className="fa fa-twitter" />
                                    {twitter}
                                </Link>
                                <h4>{email}</h4>
                                <Link to={`edit:${index}`}><button type="button" className="btn btn-outline-info" >Editar</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* container */}
    </div>


       /*  <div className="card m-3 col-12 col-md-4" style={{ width: 200 }}>
            <img className="card-img-top" src={path} alt={id} />

            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">
                    <Link className="card-link" to={`/character/${id}`}>
                        Ver Más ...
                    </Link>
                </p>
            </div>
        </div> */
    );
};

export default Card;