import React,{Fragment, useState}from 'react'

function Formulario(props){
    const [cita, actualizarCita] = useState({
        mascota :'',
        propietario :'',
        fecha :'',
        hora:'',
        sintomas: ''
    })
    const handleChange = e =>{
        actualizarCita({
            //copia todo lo que tiene en cita
            ...cita,
            //e es lo que recibe del input
            //el nombre del input y del state tiene que se le mismo para que funcione
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        //pasar la cita hacia el componente principal
        props.crearCita(cita)
        //Reiniciar el state (reiniciar el formulario)
        actualizarCita({
            mascota :'',
            propietario :'',
            fecha :'',
            hora:'',
            sintomas: ''
        })

    }

    return <Fragment>
    <h2>Crear Cita</h2>

    <form onSubmit= {handleSubmit}>
                <label>Nombre Mascota</label>
                <input 
                  type="text" 
                  name="mascota"
                  className="u-full-width" 
                  placeholder="Nombre Mascota"
                  onChange = {handleChange}
                  //lo hago asi para que despues se resete cuando se hace el submit
                  value = {cita.mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                  type="text" 
                  name="propietario"
                  className="u-full-width"  
                  placeholder="Nombre Dueño de la Mascota"
                  onChange = {handleChange}
                  value = {cita.propietario}
                />

                <label>Fecha</label>
                <input 
                  type="date" 
                  className="u-full-width"
                  name="fecha"
                  onChange = {handleChange}
                  value = {cita.fecha} 
                />               

                <label>Hora</label>
                <input 
                  type="time" 
                  className="u-full-width"
                  name="hora" 
                  onChange = {handleChange}
                  value = {cita.hora}
                />

                <label>Sintomas</label>
                <textarea 
                  className="u-full-width"
                  name="sintomas"
                  onChange = {handleChange}
                  value = {cita.sintomas}
                ></textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
        </form>
</Fragment>
}

export default Formulario