import React, { useState, useEffect } from 'react';
import '../Home.css'

function Card(props) {

  const {imagen, titulo, ubicacion, categoria, descripcion, recaudado, bakrs, disponible, meta} = props;

    return (
        <>
          <div className="card">

            <h3>{imagen}</h3>
            <p>{titulo}</p>
            <p>{ubicacion}</p>
            <p>{categoria}</p>
            <p>{descripcion}</p>
            <p>{recaudado}</p>
            <p>{bakrs}</p>
            <p>{disponible}</p>
            <p>{meta}</p>
            <button className="buttonCTA">Apoyar causa</button>
          </div>  
        </>
    )
}

export default Card
