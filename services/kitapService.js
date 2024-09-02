import axios from 'axios';

export const getKitapById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/kitaplar/1`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
