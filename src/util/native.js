var native = {
  ready (app) {
    if (window.plus) {
      plus.navigator.setStatusBarBackground('#000000')
      app && app(window.plus, 1)
    } else {
      document.addEventListener('plusready', function () {
        app && app(window.plus, 0)
      })
    }
    // other && other()
  }
}
export default native
