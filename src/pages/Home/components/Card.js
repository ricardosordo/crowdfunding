import React from 'react';
import '../Home.css'

function Card() {

  
    const exampleData = {
        titleCampaign : "Título de campaña",
        location : "Medellin",
        category: "Educacion en línea",
        brief : "Este proyecto se encarga de apoyar a la juventud a través de la tecnología",
        donations: "",
        backers: "",
        daysLeft: "",
        goal: "",
        progress: 0,
    }


    return (
        <>
          <div className="card">
            <img />
            <h3>Título</h3>
            <p>Ubicación</p>
            <p>Categoria</p>
            <p>Descripcion</p>
            <p>Recaudado</p>
            <p>Bakrs</p>
            <p>Disponible hasta</p>
            <p>Meta de recaudacción</p>
            <p>Progress Bar</p>
            <button className="buttonCTA">Apoyar causa</button>
          </div>  
        </>
    )
}

export default Card
