import axios from 'axios'
import store from '@/stores'

var isPro = process.env.NODE_ENV === 'production'
var isCrossDomain = window.location.hostname.indexOf('wanglibao.com') === -1

var Location = window.location
var host, api

// 是否本地模拟接口数据
var simulate = false

host = 'https://php1.wanglibao.com'
if (Location.hostname.indexOf('wanglibao.com') > -1) {
  host = 'https://' + Location.host
}

export const currentHost = host
export const apiList = host + '/yunying/rpc'
export const imgUpload = host + '/yunying/upload/img'
export const apiAccount = host + '/passport/service.php?c=account'

axios.interceptors.request.use(function (config) {
  store.dispatch({type: 'loading show'})
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  store.dispatch({type: 'loading hidden'})
  return response
}, function (error) {
  store.dispatch({type: 'loading hidden'})
  return Promise.reject(error)
})

function http () {
  if (arguments[0] instanceof Array) {
    var resultArr = []
    for (let i in arguments[0]) {
      resultArr.push(fetchData(arguments[0][i]))
    }
    return axios.all(resultArr)
  } else {
    let params = arguments[0]
    return fetchData(params)
  }
}

function fetchData (params) {
  params.type = params.type ? params.type : 'post'
  params['params'] = params['params'] ? params['params'] : []
  let jsonObj = {
    jsonrpc: '2.0',
    method: params['method'],
    params: params['params'],
    id: 1
  }
  let json = JSON.stringify(jsonObj)
  return axios({
    url: params.url,
    method: params.type,
    data: json,
    timeout: 10000,
    withCredentials: isCrossDomain || !isPro
  })
}

// 获取帖子板块
export const getTopicAllType = (cb) => {
  simulate = false
  return simulate ? http({
    type: 'get',
    url: '/types.json',
    method: 'getBbsThreadSectionList',
    params: [{}]
  }).then(res => res.data) : http({
    url: apiList,
    method: 'getBbsThreadSectionList',
    params: [{}]
  }).then(res => {
    setTimeout(() => {
      cb && cb()
    }, 0)
    return res.data
  })
}
// 获取置顶帖子列表
export const getBbsThreadTopList = () => {
  return http({
    url: apiList,
    method: 'getBbsThreadTopList',
    params: [{
      id: 2
    }]
  }).then(res => res.data)
}
// 获取帖子列表
export const getTopicList = (params) => {
  return http({
    url: apiList,
    method: params.method,
    params: params.params
  }).then(res => res.data)
}
// 获取帖子详情
export const getBbsThreadDetail = (id) => {
  return http({
    url: apiList,
    method: 'getBbsThreadDetail',
    params: [{
      id: id
    }]
  }).then(res => res.data)
}
// 帖子发布接口
export const topicAddRequest = (params) => {
  return http({
    url: apiList,
    method: 'BbsPublishThread',
    params: [params]
  }).then(res => res.data)
}
// 图片上传接口
export const imgUploadRequest = (params) => {
  let param = new FormData() // 创建form对象
  param.append('img', params.file) // 通过append向form对象添加数据
  return axios({
    url: imgUpload,
    data: param,
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'}
  }).then(res => res.data)
}
// 登录状态接口
export const loginStateRequest = (params) => {
  return http({
    url: apiAccount,
    method: 'loginStatus',
    params: []
  }).then(res => res.data)
}
export default http
