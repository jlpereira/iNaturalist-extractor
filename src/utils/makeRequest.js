import axios from 'axios'

const {
  VITE_API_URL,
  VITE_PROJECT_ID,
  VITE_USER_TOKEN
} = import.meta.env

export const makeRequest = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    Authorization: `Token ${VITE_USER_TOKEN}`
  }
})
