var native = {
  ready (cb) {
    alert(JSON.stringify(window.plus))
    if (window.plus) {
      cb(window.plus)
    } else {
      document.addEventListener('plusready', function () {
        cb(window.plus)
      })
    }
  }
}
export default native
