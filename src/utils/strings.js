export const getNumberFromString = str => (str.match(/\d+/g) || []).map(Number)[0]
