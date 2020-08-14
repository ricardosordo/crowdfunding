import axios from 'axios';

const BASE_URL = 'https://bakr-1dff8.firebaseio.com/campaignManager';

const createCampaign = async (user) => {
    try {
      const response = await axios.post(`${BASE_URL}/crear-usuario/`, user)
      return response.data
    } catch (err) {
      return err.response
    }
  }

  const getCampaign = () => {
    const URL = 'https://bakr-1dff8.firebaseio.com/campaignManager.json/';

    axios.get(URL)
    .then( respuesta => setCards(respuesta.data))
    .catch( error => console.log(error));
    }


const updateCampaign = async () => {
    try {
        const response = await axios.patch()
    } catch (err) {
        throw err
    }
}


const deleteCampaign = async () => {
    try {
        const response = await axios.delete()
    } catch (err) {
        throw err
    }
}


export {
    BASE_URL,
    createCampaign,
    getCampaign,
    updateCampaign,
    deleteCampaign,
}