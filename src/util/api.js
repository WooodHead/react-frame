import axios from 'axios'
var isPro = process.env.NODE_ENV === 'production'
var isCrossDomain = window.location.hostname.indexOf('wanglibao.com') === -1

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
    method: 'post',
    data: json,
    timeout: 10000,
    withCredentials: isCrossDomain || !isPro
  })
}
export const getTopicList = (params) => {
  return http({
    url: 'https://www.wanglibao.com/yunying/rpc',
    method: 'getBbsThreadList',
    params: params
  }).then(res => res.data)
}
export default http
