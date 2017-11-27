// $(document).ajaxStart((event, request, settings) => {
//   console.log(event, request, settings, 'ajaxStart')
// })
// $(document).ajaxSend((event, request, settings) => {
//   console.log('ajaxSend')
// })
// $(document).ajaxStop(() => {
//   console.log(arguments, 'ajaxStop')
// })
// $(document).ajaxError((event, request, settings) => {
//   console.log(settings, 'ajaxError')
// })
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
    data: data
  }
  switch (type) {
  case 'POST':
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
    console.log(result)
    return result
  }, (err) => {
    return err
  })
}

export default http
