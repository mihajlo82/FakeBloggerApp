import axios from 'axios';
import { GET_ALL_POSTS } from './Urls';

export const getAllPosts = async () => await axios.get(GET_ALL_POSTS);

