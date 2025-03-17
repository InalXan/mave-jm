import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

// 📌 Mesaj Gönder
export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(API_URL, messageData);
    return response.data;
  } catch (error) {
    console.error("Mesaj gönderme hatası:", error);
    throw error;
  }
};

// 📌 Tüm Mesajları Getir (Admin Paneli için)
export const getMessages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Mesajları alma hatası:", error);
    throw error;
  }
};

// 📌 Mesajı Sil (Admin Paneli için)
export const deleteMessage = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Mesaj silme hatası:", error);
    throw error;
  }
};
