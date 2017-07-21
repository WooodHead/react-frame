var plus = null
var native = {
  ready (cb) {
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
