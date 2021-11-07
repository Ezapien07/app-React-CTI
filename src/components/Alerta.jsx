import React from 'react'

const Alerta = ({mensaje}) => {
    console.log(mensaje);
    if(mensaje.length>1){
        return (
            <div className="col">
                <h3 className="text-info">No existen registros de particpantes</h3>
            </div>
        )
    }
    else{
        return <></>
    }
    
}

export default Alerta
