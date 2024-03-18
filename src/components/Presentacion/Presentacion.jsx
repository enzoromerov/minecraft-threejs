import React, { useState, useEffect } from 'react'
import { Tranquiluxe } from "uvcanvas"
import './Presentacion.css'

function Presentacion() {

  return (
   
        <div className="layoutContainer">
          <div className="contenedor-Loading ">
            <Tranquiluxe/>
            <div className="pepe">
            <h2>¡BIENVENIDOS!</h2>
            <h3>espero que les guste mi página</h3>
          </div>
          </div>
        </div>

  )
}

export default Presentacion
