import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Form from './components/FormCampaign';
import axios from 'axios';
import './Campaign.css';



function Campaign() {

    const createCampaign = (campaignTitle, location, category, brief, raised, backers, daysLeft, goal) => {

        const URL = 'https://bakr-1dff8.firebaseio.com/campaignManager.json/';

        const createCard = {campaignTitle: campaignTitle , location : location, category : category , brief: brief, raised: raised, backers: backers, daysLeft: daysLeft, goal: goal}
        axios.post(URL, createCard)
        .then(()=> createCampaign())
        .catch((error) => alert(error))
    }

    return (
        <>
            <div className="TitleCampaignCreate" >
                <div className="TitleCampaignCreate--text">
                    <h2>Crea una campaña</h2>
                    <p>Ingresa los datos que a continuación se te solicitan</p>
                </div>
            </div>
            <Form createCampaign={ createCampaign } />
        </>
    )
}

export default withRouter(Campaign)