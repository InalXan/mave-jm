import axios from 'axios'

const API_URL = 'https://mave-jm.com/api/orders'

// 📌 Tüm Siparişleri Getir
const getOrders = async () => {
  const response = await axios.get(API_URL)
  return response.data.data
}

// 📌 Yeni Sipariş Ekle
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData)
  return response.data.data
}

// 📌 Siparişi Güncelle
const updateOrder = async (id, orderData) => {
  const response = await axios.put(`${API_URL}/${id}`, orderData)
  return response.data.data
}

// 📌 Siparişi Sil
const deleteOrder = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
}
export function useOrder() {
  return { getOrders, createOrder, updateOrder, deleteOrder };
}
