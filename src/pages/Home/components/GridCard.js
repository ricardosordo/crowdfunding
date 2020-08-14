import React, { useState, useEffect } from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
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

    const deleteCampaign = (id) => {
        axios.delete(`https://bakr-1dff8.firebaseio.com/campaignManager/${id}.json/`)
        .then(()=> getCampaign())
        .catch((error) => console.log(error) )
    }


    useEffect( () => {
    getCampaign();
    }, [])


    return (
        <div>
        <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        {cards
            ? Object.keys(cards).map((id) =>
            <Card 
            key={id}
            id={id}
            titulo={cards[id].campaignTitle}
            ubicacion={cards[id].location}
            categoria={cards[id].category}
            descripcion={cards[id].brief} 
            recaudado={cards[id].raised}
            bakrs={cards[id].backers}
            disponible={cards[id].daysLeft}
            meta={cards[id].goal}
            deleteCampaign={deleteCampaign}
            />)
            : <h4>No hay campañas aún</h4>
        }

        </Grid>
        </div>
    )
}

export default GridCard
