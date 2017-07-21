var native = {
  ready (cb) {
    alert(JSON.stringify(window.plus))
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
