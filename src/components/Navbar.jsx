import React , { useContext } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes"; 


/**
  Estamos llegando aquí a partir del LoginRouter que es mi router principal por lo que el history lo podemos recibir 
como un prop, por ello hay que desestructurarlo
* @param {*} history 
* @returns 
 */
const Navbar = () => {


  const { dispatch } = useContext(AuthContext);
  //Recuperamos el history mediante useHistory
  const history = useHistory();
  const handelLogout = () => {
    //Usamos el dispatch para modificar el context y establecerlo en true.
    dispatch({ type: authTypes.logout });
  
    history.push("/home");
  };
  


    return (
        <nav className="navbar navbar-expand-lg  fixed-top bg-primary navbar-dark">
        <NavLink activeClassName="active text-white" className="navbar-brand" to="/home">
        <img src="assets/utl.png" alt="Congreso de Tecnologias de la Información" className="img-fluid" width={30} height={30} className="d-inline-block align-top" loading="lazy" />
        
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link h5" to="/home">Inicio <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link h5" to="/participantes">Participantes</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link h5" to="/registro">Registro</NavLink >
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <button type="button"  onClick={handelLogout}  className="btn btn-danger mr-3">Logout</button>
          <img src="assets/Tics.png" alt="Congreso de Tecnologias de la Información" className="img-fluid" width={30} height={30} className="d-inline-block align-top" loading="lazy" />
        
          </form>
        </div>
      </nav>
    );
};
export default Navbar;