import {create} from 'apisauce';

// define the api
const api = create({
  baseURL: 'http://api.openweathermap.org',
});
export default api;
