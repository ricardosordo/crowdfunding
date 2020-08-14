import React from 'react'
import Button from '@material-ui/core/Button';
import '../../Home/Home.css'

const Landing = () => {
    return (
        <div className="landing">
            <div className="imglanding">
                <img  src="https://image.freepik.com/free-vector/people-balconies-concept_23-2148509279.jpg"></img>
            </div>
            <div className="title">
            <img src="https://svgur.com/i/NhN.svg" className="Logo" alt="Logo"></img>
            <h1 className="title.l">Apoya una causa con la que conectes de corazón</h1>
            <button type="button" className="button">¡Comienza una campaña!</button>
        <div className="Explora">¡Explora, y conecta con un proyecto!</div>
        </div>
        </div>
    )
}


export default (Landing) 

