import React, { useState, useEffect } from "react";
import World3d from './../components/world3d'
import Minecraft from './minecraft'
import Loading from "../components/Loading";

function Home () {

  const [modelosCargados, setModelosCargados] = useState(true );
  
function setestado(){
  setModelosCargados(false);
}
  useEffect(() => {
    setTimeout(setestado,8000)
  
   
  },{})
  
    
  return (
  <>
  {modelosCargados ? (

    <Loading />
      ) : (
        
        <div className='layoutContainer'>
        <div className='header'>
          <h1>O Z N 3 - C R A F T</h1>
        </div>
        <div className='body'>
        
            <h2>Este es uno de los proyectos que he aprendido a desarrollar durante mi aprendizaje con threejs basandome en tutoriales de diversas fuentes como middudev y un foro cuyo nombre no me acuerdo xd</h2>
            <br></br>
            <hr></hr>
          
          <div className='contenedor-threejs'>
              <Minecraft/>
          </div>
            <br>
            </br>
          <div className='contenedor-threejs'>
              <World3d/>
          </div>
        </div>
      </div>
      )}
    
      </>
  )
}

export default Home