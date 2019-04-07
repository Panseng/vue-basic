import axios from 'axios'
import { baseUrl } from '@/config/env'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

service.interceptors.request.use()

service.interceptors.response.use()

export default service
