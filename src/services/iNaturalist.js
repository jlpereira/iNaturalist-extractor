import axios from 'axios'

const apiURL = 'https://www.inaturalist.org/'
const makeRequest = axios.create({
  baseURL: apiURL
})

export const Observation = {
  find: id => makeRequest.get(`/observations/${id}.json`),

  where: params => makeRequest.get(`/observations.json`, { params }),
}
