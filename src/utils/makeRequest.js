import axios from 'axios'

const {
  VITE_API_URL,
  VITE_PROJECT_ID,
  VITE_USER_TOKEN
} = import.meta.env

export const makeRequest = axios.create({
  baseURL: VITE_API_URL,
  params: {
    token: VITE_USER_TOKEN,
    project_id: VITE_PROJECT_ID
  }
})
