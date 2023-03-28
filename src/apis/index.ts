import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
  headers: {
    Authorization: `JWT ${localStorage.getItem('JWT')}`,
  },
});
