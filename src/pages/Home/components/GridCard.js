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
    .catch( error => console.log(error))
    }

    useEffect( () => {
    getCampaign();
    }, [])


    console.log(cards)


    return (
        <div className="container">
        {/* {cards.map(card => {
            return(<Card titulo={card.campaignTitle} />)
        })} */}
        </div>
    )
}

export default GridCard
