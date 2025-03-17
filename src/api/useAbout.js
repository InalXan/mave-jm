import axios from 'axios';

const API_URL = 'http://localhost:5000/api/about';

export const getAllContent = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createContent = async (content) => {
    const response = await axios.post(API_URL, content);
    return response.data;
};

export const updateContent = async (id, content) => {
    const response = await axios.put(`${API_URL}/${id}`, content);
    return response.data;
};

export const deleteContent = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
