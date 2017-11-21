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
const http = (url, config = {}) => {
  const type = config.type || 'GET'
  const data = config.data || config || {}
  return $.ajax({
    url: url,
    type: type,
    data: data
  }).then((res) => {
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
