import axios from 'axios'
// 创建axios实例
const api=axios.create({
    baseURL:'http://127.0.0.1:9090/api'
})
export default api;