import axios from 'axios';

const API_BASE_URL = 'http://localhost:5500';

const apiService = {
    register: async (formData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);
            return response.data;
        } catch (error) {
            throw error.response.data; // Throw the error response data
        }
    },

    login: async (formData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
            return response.data;
        } catch (error) {
            throw error.response.data; // Throw the error response data
        }
    }
}

export default apiService;