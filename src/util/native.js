var plus = null
var native = {
  ready (cb) {
    alert(JSON.stringify(plus))
    if (plus) {
      cb(plus)
    } else {
      document.addEventListener('plusready', function () {
        cb(plus)
      })
    }
  }
}
export default native
