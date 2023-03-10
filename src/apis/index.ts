import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
});

export const setInstanceHeaders = (JWT: string) => {
  instance.interceptors.request.use(config => {
    config.headers.Authorization = `JWT ${JWT}`;
    return config;
  });
};
