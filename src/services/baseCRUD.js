import { makeRequest } from "../utils/makeRequest";

export default controller => ({
  find: (id, params) => makeRequest.get(`/${controller}/${id}.json`, { params }),

  where: params => makeRequest.get(`/${controller}.json`, { params }),

  create: params => makeRequest.post(`/${controller}.json`, { params }),

  update: (id, params) => makeRequest.patch(`/${controller}/${id}.json`, { params })
})