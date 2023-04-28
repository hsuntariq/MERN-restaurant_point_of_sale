import axios from 'axios';

const API_URL = 'http://localhost:3001/api/dish/'

const postItem = async (itemData) => {
        const response = await axios.post(API_URL, itemData);
        return response.data;
}

// get the items

const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const findItem = async (id) => {
    const response = await axios.get(API_URL + 'single-item/' + id);
    return response.data
}

const itemService = {
    postItem,
    getItems,
    findItem,
}

export default itemService;