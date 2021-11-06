import React
/* , { useContext } 
 */from 'react';
import { NavLink
    /* , useHistory  */
} from 'react-router-dom';
const Navbar = () => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <h2 className="navbar-brand">
                <img src="assets/Tics.png" alt="" width={80} height={60} />
                </h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link" aria-current="page"
                                to="/home">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link" aria-current="page"
                                to="/participantes">Participantes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link" aria-current="page"
                                to="/registro">Registro</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;