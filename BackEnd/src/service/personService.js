import axios from "axios";

const baseUrl = "/persons";
let token = null;

function setToken(newToken) {
    token = `Bearer ${newToken}`;
}

async function getPersons() {
   
    const config = {
        headers:{ Authorization: token },
    };
    

    const response = await axios.get(baseUrl, config);
    return response.data;
}

export default {
    getPersons, 
    setToken,
};