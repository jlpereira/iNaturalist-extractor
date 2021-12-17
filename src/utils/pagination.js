export default headers => ({
  total: headers['x-total-entries'],
  per_page: headers['x-per-page']
})