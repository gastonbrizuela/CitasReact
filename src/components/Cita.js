import React from 'react'
//ver como es lo re restructing para no usar el props
function Cita(props){
    return (
        <div className = "cita">
            <p>Mascota: <span>{props.cita.mascota}</span></p>
            <p>Propietario: <span>{props.cita.propietario}</span></p>
            <p>Fecha: <span>{props.cita.fecha}</span></p>
            <p>Hora: <span>{props.cita.hora}</span></p>
            <button 
                onClick ={() => props.eliminarCita(props.index)}
                type = "button" className = "button eliminar u-full-width">Eliminar</button>

        </div>
    )
}

export default Cita