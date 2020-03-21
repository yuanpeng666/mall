import axios from 'axios'

export function request(config){
  // axios实例
  const sl1 = axios.create({
    baseURL: 'http://',
    timeout: 5000
  })

  // 拦截器
  sl1.interceptors.request.use((config) => {
    return config;
  },(err) => {

  })

  sl1.interceptors.response.use((res) => {
    return res
  }, (err) => {

  })
  // 发送请求
  return sl1(config)
}