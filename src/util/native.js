var native = {
  ready ({app, other}) {
    if (window.plus) {
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
