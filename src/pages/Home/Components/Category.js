import React from 'react';
//import { Link, NavLink, withRouter } from 'react-router-dom';
import '../../Home/Home.css'



function Category () {
    return (
        <div className="Category.bar">
            <ul className="Categories">
              
                <a className="active" href="#">Todas las categorias</a>
               
                <a href="#">Educación</a>
                
                <a href="#">Tecnología</a>
              
                <a href="#">Salud</a>
                
                <a href="#">Alimentación</a>
              
                <a href="#">Animales</a>

                <a href="#">Sostenibilidad</a>

                <a href="#">Emergencias</a>

                <a href="#">Arte</a>

                <a href="#">Emprendimiento</a>
               
                <hr className="stroke"></hr>
            </ul>
           
        </div>
        
    )
}

export default (Category) 
