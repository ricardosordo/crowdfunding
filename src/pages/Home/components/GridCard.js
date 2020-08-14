import React, { useState, useEffect } from 'react';
import Card from './Card'
import '../Home.css'
import axios from 'axios';



function GridCard() {

    const [cards, setCards] = useState([]); 


    const getCampaign = () => {
    const URL = 'https://bakr-1dff8.firebaseio.com/campaignManager.json/';

    axios.get(URL)
    .then( respuesta => setCards(respuesta.data))
    .catch( error => console.log(error));
    }

    useEffect( () => {
    getCampaign();
    }, [])


    return (
        <div className="container">
        {cards
            ? Object.keys(cards).map((id) =>
            <Card 
            titulo={cards[id].campaignTitle}
            ubicacion={cards[id].location}
            categoria={cards[id].category}
            descripcion={cards[id].brief} 
            recaudado={cards[id].raised}
            bakrs={cards[id].backers}
            disponible={cards[id].daysLeft}
            meta={cards[id].goal}

            />)
            : <h1>No ha campañas aún</h1>
        }
        </div>
    )
}

export default GridCard
