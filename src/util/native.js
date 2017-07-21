var native = {
  ready (cb) {
    if (window.plus) {
      cb(plus)
    } else {
      document.addEventListener('plusready', function () {
        cb(plus)
      })
    }
  }
}
export default native
