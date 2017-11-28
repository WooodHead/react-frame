import { notification } from 'antd'
import store from '@/stores'

$(document).ajaxStart((event, request, settings) => {
  // console.log('ajaxStart', event, request, settings, 'ajaxStart')
})
$(document).ajaxSend((event, request, settings) => {
  store.dispatch({type: 'loading show'})
  // console.log('ajaxSend', event, request, settings)
})
$(document).ajaxStop((a, b, c) => {
  // console.log('ajaxStop', a, b, c)
})
$(document).ajaxComplete((a, b, c) => {
  store.dispatch({type: 'loading hidden'})
  // console.log('ajaxComplete', a, b, c)
})
$(document).ajaxError((event, request, settings) => {
  notification.error({
    message: '请求出错',
    description: '网络请求出错，请检查网络是否正常！'
  })
})
// $.ajaxSettings.statusCode = {
//   401: () => {
//     console.log('401')
//     alert('401')
//   }
// }
const http = (url, type, config = {}) => {
  if (typeof type === 'object') {
    config = type
    type = config.type || 'GET'
    delete (config.type)
  } else {
    type = type || 'GET'
  }
  type = type.toUpperCase()
  const data = config.data || config || {}
  const headers = config.headers || undefined
  let ajaxConfig = {
    url: url,
    method: type,
    headers: headers,
    contentType: 'application/json',
    data: data,
    timeout: 10000
  }
  switch (type) {
  case 'POST':
    ajaxConfig.processData = false
    ajaxConfig.data = JSON.stringify(data)
    break
  case 'PUT':
    ajaxConfig.processData = false
    ajaxConfig.data = JSON.stringify(data)
    break
  }
  return $.ajax(ajaxConfig).then((res) => {
    var result = {}
    if (typeof res === 'string') {
      try {
        result = JSON.parse(res)
      } catch (e) {
        result = {}
      }
    } else {
      result = res
    }
    // console.log(result)
    return result
  }, (err) => {
    // if (err.statusText === 'timeout') {
    //   notification.error({
    //     message: '请求超时',
    //     description: '网络请求超时，请检查网络是否正常！'
    //   })
    // }
    return err
  })
}

export default http
