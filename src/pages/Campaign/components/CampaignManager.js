import React from 'react'

function CampaignManager(props) {

    const {campaignTitle, brief, id, deleteCampaign} = props;

    return (
        <div>
            <p>{campaignTitle}</p>
            <p>{brief}</p>
            <button className="btn btn-danger" onClick={() => deleteCampaign(id)}>Borrar Campaña</button>
        </div>
    )
}

export default CampaignManager
