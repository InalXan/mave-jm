import { ref } from 'vue'
import axios from 'axios'

const API_URL = 'https://mave-jm.com/api/auth'

export function useAuth() {
  const user = ref(null)
  const token = ref(localStorage.getItem('accessToken') || '')

  // Kullanıcı kaydı
  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      })
      console.log('Register Response:', response.data)
      return response.data
    } catch (error) {
      console.error('Register Error:', error.response?.data || error.message)
      throw error.response?.data || error.message
    }
  }

  // Kullanıcı girişi (Token al)
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password })

      if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token)
        token.value = response.data.token
      }

      return response.data
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message)
      throw error.response?.data || error.message
    }
  }

  // Kullanıcı bilgilerini çekme (Token ile)
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/login`, {
        headers: { Authorization: `Bearer ${token.value}` },
      })
      user.value = response.data
      return response.data
    } catch (error) {
      console.error('Fetch User Error:', error.response?.data || error.message)
      throw error.response?.data || error.message
    }
  }

  // Çıkış yap
  const logout = () => {
    localStorage.removeItem('accessToken')
    token.value = ''
    user.value = null
  }

  return { user, token, register, login, fetchUser, logout }
}
