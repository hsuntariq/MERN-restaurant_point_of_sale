import axios from 'axios';

const URL = 'http://localhost:3001/api/tables/'

const getTables = async () => {
    const response = await axios.get(URL + 'get-tables');
    return response.data;
}


const tableService = {
    getTables,
}


export default tableService;