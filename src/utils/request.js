import axios from 'axios'

// 创建一个axios实例，可以设置一些默认的请求参数
const request = axios.create({
  baseURL: 'http://192.168.151.120:8080/',
  timeout: 5000
})
export default request
