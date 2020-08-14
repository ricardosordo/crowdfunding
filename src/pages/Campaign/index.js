import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Form from './components/FormCampaign'
import CampaignManager from './components/CampaignManager'
import axios from 'axios';



function Campaign() {

    const createCampaign = (campaignTitle, location, category, brief, raised, backers, daysLeft, goal) => {

        const URL = 'https://bakr-1dff8.firebaseio.com/campaignManager.json/';

        const createCard = {campaignTitle: campaignTitle , location : location, category : category , brief: brief, raised: raised, backers: backers, daysLeft: daysLeft, goal: goal}
        axios.post(URL, createCard)
        .then(()=> createCampaign())
        .catch((error) => alert(error))
    }

    return (
        <div>
            <div className="container">
            <h2>Crea una campaña</h2>
            <Form createCampaign={ createCampaign } />
            <h2>Edita la campaña que requieras</h2>
            <CampaignManager />
            </div>
        </div>
    )
}

export default withRouter(Campaign)