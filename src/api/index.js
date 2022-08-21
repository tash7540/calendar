
import axios from 'axios';

const url = 'http://localhost:8000/events';

export const fetchPosts = () => axios.get(url);

export const createEvent = (newEvent) => axios.post(url, newEvent);
