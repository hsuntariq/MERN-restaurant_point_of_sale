import axios from 'axios';

const API_URL = 'http://localhost:3001/api/dish'

const postItem = async (itemData) => {
        const response = await axios.post(API_URL, itemData);
        return response.data;
}


const itemService = {
    postItem
}

export default itemService;