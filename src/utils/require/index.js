// 引入 axios
import axios from 'axios'
// 引入 vant 第三方库
import { Notify } from 'vant'

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.53.120.144' : 'http://localhost:8080',
  timeout: 10000
})

// 设置路由拦截
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response.data
  if (!res.code === 200) { // 统一错误处理
    Notify(res.code_msg) // vant 库中的方法
    return Promise.reject(res.code_msg)
  }
  return response.data
}, function (error) {
  // 对响应错误做点什么
  Notify('网络异常，请稍后重试')
  return Promise.reject(error)
})

// 暴露实例
export default instance
