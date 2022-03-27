import axios from 'axios';

import {
  TIMEOUT,
  BASE_URL
} from "./config";

const request = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL
})

request.interceptors.request.use(config => {
  // 1.发送网络请求时，在页面中添加一个loading组件作为动画；

  // 2.某些网络请求要求用户必须登录，可以在请求中判断是否携带了token，没有携带token直接跳转到login页面；

  // 3.对某些请求参数进行序列化；
  return config;
}, err => {
  return err;
})

request.interceptors.response.use(response => {
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = "请求错误";
        break;
      case 401:
        err.message = "未授权访问";
        break;
      default:
        err.message = "其他错误";
    }
  }
  return err;
})

export default request;
