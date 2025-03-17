import axios from 'axios';

const API_URL = 'http://localhost:5000/api/mission';

export const getAllMission = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMission = async (mission) => {
    const response = await axios.post(API_URL, mission);
    return response.data;
};

export const updateMission = async (id, mission) => {
    const response = await axios.put(`${API_URL}/${id}`, mission);
    return response.data;
};

export const deleteMission = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
