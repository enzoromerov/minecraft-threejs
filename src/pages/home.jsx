import React, { useState, useEffect } from 'react'
import World3d from './../components/world3d'
import Minecraft from './minecraft'
import Loading from '../components/Loading'
import logoMinecraft from '../assets/minecraftlogo.jpeg'
import logoSpline from '../assets/splinetool_logo.jpeg'
import { Tranquiluxe } from "uvcanvas"
import './home.css'
import Presentacion from "../components/Presentacion/Presentacion"

function Home() {
  const [modelosCargados, setModelosCargados] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [Selection, setSelection] = useState('')

  
  function seleccion(proyecto) {
    setSelection(proyecto)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModelosCargados(false)
      setLoading(false)
    }, 8000)

    // Limpia el temporizador cuando el componente se desmonta o cuando se actualiza el estado de modelosCargados
    return () => {
      clearTimeout(timeoutId)
      setLoading(false)
    }
  }, [modelosCargados])

  return (
    <>
      {modelosCargados ? (
        <div className="layoutContainerpresentacion">
         <Presentacion></Presentacion>
        </div>
      ) : (
        <div className="layoutContainer">
          <div className="header">
            <h1>Enzo Romero</h1>
          </div>
          <div className="body2">
            <h1>¡BIENVENIDOS!</h1>
            <br></br>
            <h2>
              Esta es mi pagina web. Van a poder encontrar proyectos propios destinados a mostrar mi crecimiento personal, creatividad y pasión. Te invito a que
              veas mis ideas y descubras un poco de mi trabajo
            </h2>
            <br></br>
            <hr></hr>

            <div className="box">
              <div className="box-1" onClick={() => seleccion('minecraft')}>
                <img src={logoMinecraft} />
              </div>
              <div className="box-2" onClick={() => seleccion('spline')}>
                <img src={logoSpline} />
              </div>
            </div>

            <div className={Selection === 'minecraft' ? 'contenedor-threejs' : 'd-none'}>
              <Minecraft />
            </div>
            <br></br>
            <div className={Selection === 'spline' ? 'contenedor-threejs' : 'd-none'}>
              <World3d />
            </div>
          </div>
          <div className="footer">
            <p>enzoromerov@hotmail.com</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
