import Axios from 'axios'
import LRU from 'lru-cache'

const inBrowser = typeof window !== 'undefined'

// When using bundleRenderer, the server-side application code runs in a new
// context for each request. To allow caching across multiple requests, we need
// to attach the cache to the process which is shared across all requests.
const cache = inBrowser
  ? null
  : (process.__API_CACHE__ || (process.__API_CACHE__ = createCache()))

function createCache () {
  return LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })
}

// 创建所有API请求服务为单例实例
const api = createServerSideAPI()
// const api = inBrowser
//   ? Axios.create({ baseURL: 'http://localhost:8080' })
//   : (process.__API__ || (process.__API__ = createServerSideAPI()))

function createServerSideAPI () {
  const api = Axios.create({ baseURL: 'http://localhost:8080' })
  // api.defaults.withCredentials = false
  // api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  // api.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With'
  return api
}

// Add a response interceptor
api.interceptors.response.use((response) => {
  // Do something with response data
  return response;
}, (error) => {
  // 全局错误处理
  if (error.response) {
    switch (error.response.status) {
      case 401:
        alert('未授权的操作，请重新登录')
        break
      case 504:
        alert('超时或未登录，请重新登录')
        break
      default:
        break
    }
  }
  // return Promise.reject(error)
})

export default api

