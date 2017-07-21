var native = {
  ready (cb) {
    if (window.plus) {
      cb(window.plus, 1)
    } else {
      document.addEventListener('plusready', function () {
        cb(window.plus, 0)
      })
    }
  }
}
export default native
