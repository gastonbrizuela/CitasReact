import React,{useState,Fragment} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App(){
  //useState retorna 2 funciones
  //el state actual =  this.state
  //Funcion que actualiza el state this.setState()
  const [citas, guardarCita] = useState([])

  const crearCita = cita =>{
    const nuevaCita = [...citas,cita]
    //almacenamos en el state
    guardarCita(nuevaCita)
  }
  
  //eliminar citas del state
  const eliminarCita = index =>{
    const nuevasCitas = [...citas]
    //splice nos permite eliminar el elemento de un arreglo
    nuevasCitas.splice(index,1)
    guardarCita(nuevasCitas)
  }
  console.log(citas)
  return (
      <Fragment>
        <h1>Administrador de pacientes</h1>
        <div className = "conteiner">
          <div className = "row">
            <div className = "one-half column">
              <Formulario crearCita = {crearCita}/>
            </div>
            <div className = "one-half column">
              <h2>Citas Cargadas</h2>
              {citas.map((cita,index)=>(
                <Cita 
                  key = {index}
                  index = {index}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
  )
}
export default App