import axios from 'axios';
import Api from '../api';
import { BASE_URL, PROJECT_PREFIX } from '../../config';

class ProjectApi extends Api {
  constructor(url) {
    super();
    this.url = url;
  }

  get = async (id) => {
    return this.sendRequest(axios.get(`${this.url}/${id}`));
  }

  get = async () => {
    return this.sendRequest(axios.get(this.url));
  }

  getMy = async () => {
    return this.sendRequest(axios.get(`${this.url}/my`));
  }

  getSaved = async () => {
    return this.sendRequest(axios.get(`${this.url}/saved`));
  }

  getAcquired = async () => {
    return this.sendRequest(axios.get(`${this.url}/acquired`));
  }

  search = async (query) => {
    return this.sendRequest(axios.get(`${this.url}/search?value=${query}`));
  }

  sort = async (query) => {
    return this.sendRequest(axios.get(`${this.url}/sort?column=${query}`));
  }
  
  create = async (data) => {
    return this.sendRequest(axios.post(this.url, data));
  }

  remove = async (id) => {
    return this.sendRequest(axios.delete(`${this.url}/${id}`, { params: id }));
  }

  update = async (id, data) => {
    return this.sendRequest(axios.put(`${this.url}/${id}`, data));
  }
}

export default new ProjectApi(`${BASE_URL}${PROJECT_PREFIX}`);