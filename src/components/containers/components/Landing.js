import React from 'react'
import './Landing.css'
import Button from '@material-ui/core/Button';


const Landing = () => {
    return (
        <div className="landing">
            <div className="title">
              <img src="https://svgur.com/i/NhN.svg" className="Logo" alt="Logo"></img>
              <h1 clasName="title.l">Apoya una causa con la que conectes de corazón</h1>
              <h2 className="title.parrafo">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborrud exercitation ullamco laborid</h2>
              <button type="button" class="button">¡Comienza una campaña!</button>

              <div className="Explora">¡Explora, y conecta con un proyecto!</div>
            </div>
            
        </div>
    )
}

export default Landing
