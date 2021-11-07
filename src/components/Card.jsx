import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

const Card = ({ index, nombre, email, twitter, apellidos, ocupacion,dispatch }) => {

    function HeaderView() {
        let location = useLocation();
        return location.pathname
    }
    const history = useHistory();

    const num = Math.floor(Math.random() * (13 - 1) + 1);
    const path = `/assets/${num}.png`;

    const participantes = JSON.parse(localStorage.getItem("participantes"));

    
    function deleteP(index){
        console.log(index);
            participantes.splice(index, 1);
           
            //histoy.push("/participantes");
        console.log(participantes);
        localStorage.setItem("participantes", JSON.stringify(participantes));
         window.location.reload();
    }
    const delete1=(index)=>{
        deleteP(index);
    }
    


    console.log(index);

    return (
        <>
            <div className="col-5 m-3">
                <div className="card-box cardB bg-light shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto float float-left" >
                            <img src={path} alt="Congreso" className="rounded-circle img-fluid" width="80px" />
                        </div>
                        <div className="ml-3 text-center">
                            <h4>{nombre}  {apellidos}</h4>
                        </div>
                        <div className="text-center">
                            <a href={"https://twitter.com/"+twitter} className="guest-twitter text-primary" data-original-title="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mr-2 text-primary" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                {twitter}
                            </a>
                        </div>

                        <div className="text-center">
                        <h4>{email}</h4>
                        <h4>{ocupacion}</h4>
                        </div>
                        <div className="col-12 position-relative ">
                            <br />
                        <Link to={`edit:${index}`}><button type="button" className="btn btn-outline-info  btn-block my-4" >Editar</button></Link>
                        <button type="button"  onClick={()=>delete1(index)} className="btn btn-outline-danger  btn-block my-4" >Eliminar</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* end col */}
        </>




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