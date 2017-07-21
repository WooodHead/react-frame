webpackJsonp([3],{

/***/ 1002:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container-1EXYp","info":"info-3NKQ8","user":"user-tpml2","user-left":"user-left-3DAr5","avatar":"avatar-3efxn","user-right":"user-right-1WiZA","nickname":"nickname-3-nO6","edit-info":"edit-info-3hpBl","item":"item-2SHea","num":"num-ydCFA","title":"title-2QYi1"};

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu":"menu-2whiX","item":"item-byvWA","menu-name":"menu-name-nT62N","icon":"icon-kb834","message":"message-3OblS","collect":"collect-3MesY","topic":"topic-3vQLf","comment":"comment-zwbBG","task":"task-3nUqr","mark":"mark-1aavu","arrows":"arrows-12VMS"};

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container-BkX2O","btn":"btn-1OhT2","movement":"movement-czR9y","move":"move-1DNQx"};

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_Navbar__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_mine_NoLogin__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_mine_Logined__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_mine_MineMenu__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_user__ = __webpack_require__(341);
















var Mine = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Mine, _Component);

  function Mine() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Mine);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Mine.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Mine)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Mine, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__actions_user__["b" /* fetchUserInfo */]());
    }
  }, {
    key: 'render',
    value: function render() {
      var loginState = this.props.loginState;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'layout' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_common_Navbar__["a" /* default */], {
          titleContent: '\u6211\u7684'
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'scroll-wrap bg-white' },
          loginState === 'logined' && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_mine_Logined__["a" /* default */], null),
          loginState === 'nologin' && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__containers_mine_NoLogin__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__containers_mine_MineMenu__["a" /* default */], null)
        )
      );
    }
  }]);

  return Mine;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["e" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["b" /* connect */])(function (_ref) {
  var user = _ref.user;
  return user;
})(Mine)));

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stylus_navbar__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__stylus_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_webview__ = __webpack_require__(211);












var Navbar = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Navbar, _Component);

  function Navbar(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Navbar);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Navbar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Navbar)).call(this, props));

    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Navbar, [{
    key: 'goBack',
    value: function goBack() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_8__util_webview__["a" /* default */].ready({
        app: function app(mixins) {
          if (_this2.props.match.path === '/') {
            mixins.touchClose();
          } else {
            _this2.props.history.goBack();
          }
        },
        other: function other() {
          _this2.props.history.goBack();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          titleContent = _props.titleContent,
          rightContent = _props.rightContent,
          titleClass = _props.titleClass,
          leftClick = _props.leftClick;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default.a['navbar'] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default.a['navbar-left'] },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { onClick: leftClick || this.goBack, className: __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default.a['icon-go-back'] })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default.a['navbar-title'] + ' ' + titleClass },
          titleContent
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__stylus_navbar___default.a['navbar-right'] },
          rightContent
        )
      );
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["e" /* withRouter */])(Navbar));

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navbar":"navbar-2lIqS","navbar-left":"navbar-left-GfsH5","icon-go-back":"icon-go-back-1GjUQ","navbar-right":"navbar-right-2tOJ_","navbar-title":"navbar-title-2-lZC"};

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_api__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_xhr__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_xhr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__util_xhr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_resize__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_drag__ = __webpack_require__(989);














var ReactCoreImageUpload = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ReactCoreImageUpload, _Component);

  function ReactCoreImageUpload(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ReactCoreImageUpload);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReactCoreImageUpload.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReactCoreImageUpload)).call(this, props));

    _this.props.class.push('g-core-image-upload-btn');
    _this.state = {
      formID: 'g-core-upload-input-' + Math.floor(Math.random() * 10000),
      uploading: false,
      hasImage: false,
      class: _this.props.class.join(' '),
      image: {
        src: 'http://img1.vued.vanthink.cn/vuedcb0efb21e5f2ca013ca1480198bbf4b3.png',
        width: 0,
        height: 0
      }
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ReactCoreImageUpload, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: this.state.class, id: this.state.formID },
        this.props.text,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'form',
          { className: 'g-core-image-upload-form', method: 'post', encType: 'multipart/form-data', action: '', style: { display: 'block', cursor: 'pointer', position: 'absolute', left: 0, top: 0, width: 1242, height: 61, opacity: 0, margin: 0, padding: 0, overflow: 'hidden' } },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', { disabled: this.state.uploading, onChange: this.change.bind(this), name: this.props.inputOfFile, type: 'file', accept: this.props.inputAccept, style: { width: '100%', height: '100%' } })
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: 'g-core-image-corp-container', style: { display: this.state.hasImage ? 'block' : 'none' } },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: 'image-aside' },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: 'g-crop-image-box' },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: 'g-crop-image-principal' },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: this.state.image.src, style: { width: this.state.image.width, height: this.state.image.height } }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: 'select-recorte', onMouseDown: this.drag.bind(this), onTouchStart: this.drag.bind(this), style: { width: 100, height: 100 } },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: 'g-s-resize' }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: 'g-e-resize' }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: 'g-resize', onTouchStart: this.resize.bind(this), onMouseDown: this.resize.bind(this) })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: 'info-aside' },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: 'btn-groups' },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { onClick: this.cancel.bind(this), className: 'btn btn-cancel' },
                this.props.cropBtn.cancel
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { onClick: this.doCrop.bind(this), className: 'btn btn-upload' },
                this.props.cropBtn.ok
              )
            )
          )
        )
      );
    }
  }, {
    key: '__find',
    value: function __find(ele) {
      var dq = document.getElementById(this.state.formID);
      return dq.querySelector(ele);
    }
  }, {
    key: 'change',
    value: function change(e) {
      var fileVal = this.__find('input').value.replace(/C:\\fakepath\\/i, '');
      var fileExt = fileVal.substring(fileVal.lastIndexOf('.') + 1);
      var extensionsArr = this.props.extensions;
      if (extensionsArr.length > 1) {
        var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$', 'i');
        if (!reg.test(fileExt)) {
          return this.props.errorHandle('TYPE ERROR');
        }
      }
      if (e.target.files[0].size > this.props.maxFileSize) {
        var formatSize;
        if (parseInt(this.maxFileSize / 1024 / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024 / 1024).toFixed(2) + 'MB';
        } else if (parseInt(this.maxFileSize / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024).toFixed(2) + 'kB';
        } else {
          // formatSize = options.maxFileSize.toFixed(2) + 'Byte'
        }
        this.props.errorHandle('FILE IS TOO LARGER THAN THE MAX VALUE ' + formatSize);
        return;
      }

      this.files = e.target.files;
      if (this.props.crop) {
        this.__showImage();
        return;
      }
      this.props.imageChanged(this.files[0]);
      this.tryAjaxUpload();
    }
  }, {
    key: '__showImage',
    value: function __showImage() {
      document.body.style.overflow = 'hidden';
      this.setState({
        hasImage: true
      });
      this.__readFiles();
    }
  }, {
    key: '__readFiles',
    value: function __readFiles() {
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e) {
        var src = e.target.result;
        self.__initImage(src);
      };
      reader.readAsDataURL(this.files[0]);
    }
  }, {
    key: '__initImage',
    value: function __initImage(src) {
      var pic = new Image();
      var self = this;
      pic.src = src;

      pic.onload = function () {
        self.setState({
          image: {
            src: src,
            width: pic.naturalWidth,
            height: pic.naturalHeight
          }
        });
        self.__reseyLayout();
        self.__initCropBox();
      };
    }

    // init crop area

  }, {
    key: '__initCropBox',
    value: function __initCropBox() {
      var $selectCropBox = this.__find('.select-recorte');
      var $wrap = this.__find('.g-crop-image-principal');
      var imageWidth = parseInt($wrap.style['width']);
      var imageHeight = parseInt($wrap.style['height']);
      var ratioW = this.props.cropRatio.split(':')[0];
      var ratioH = this.props.cropRatio.split(':')[1];
      var Swidth = imageWidth / 100 * 80;
      var Sheight = Swidth / ratioW * ratioH;
      $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height: ' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px;';
      if (Sheight > imageHeight) {
        Sheight = imageHeight / 100 * 80;
        Swidth = Sheight * ratioW / ratioH;
        $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height:' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px';
      }
    }

    // reset layout

  }, {
    key: '__reseyLayout',
    value: function __reseyLayout() {
      var H = window.innerHeight - 80;
      var W = window.innerWidth - 60;
      var imageWidth = this.state.image.width;
      var imageHeight = this.state.image.height;
      // caculate the image ratio
      var R = imageWidth / imageHeight;
      var Rs = W / H;
      var $container = this.__find('.g-crop-image-principal');
      if (R > Rs) {
        this.setState({
          image: {
            src: this.state.image.src,
            width: W,
            height: W / R
          }
        });
        // I don't hope to use a state to change the container stye
        $container.style.cssText = 'width:' + W + 'px;height:' + W / R + 'px;margin-top:' + (H - W / R) / 2 + 'px';
      } else {
        this.setState({
          image: {
            src: this.state.image.src,
            width: H * R,
            height: H
          }
        });
        $container.style.cssText = 'width:' + H * R + 'px;height:' + H + 'px;margin-left:' + (W - H * R) / 2 + 'px;';
      }
      this.imgChangeRatio = imageWidth / this.state.image.width;
    }
  }, {
    key: 'doCrop',
    value: function doCrop(e) {
      var btn = e.target;
      btn.value = btn.value + '...';
      btn.disabled = true;
      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.data) !== 'object') {
        this.data = {};
      }

      var $selectCrop = this.__find('.select-recorte');
      // this.data['request'] = 'crop'

      this.data['postionX'] = Math.ceil(parseInt(window.getComputedStyle($selectCrop).left) * this.imgChangeRatio);
      this.data['postionY'] = Math.ceil(parseInt(window.getComputedStyle($selectCrop).top) * this.imgChangeRatio);
      this.data['width'] = Math.ceil(parseInt(window.getComputedStyle($selectCrop).width) * this.imgChangeRatio);
      this.data['height'] = Math.ceil(parseInt(window.getComputedStyle($selectCrop).height) * this.imgChangeRatio);
      this.tryAjaxUpload(function () {
        btn.value = btn.value.replace('...', '');
        btn.disabled = false;
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.files = '';
      this.setState({
        hasImage: false
      });
      this.__find('input').value = '';
      document.body.removeAttribute('style');
    }
    // use ajax upload  IE9+

  }, {
    key: 'tryAjaxUpload',
    value: function tryAjaxUpload(callback) {
      var self = this;
      var data = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        data.append(self.props.inputOfFile, this.files[i]);
      }

      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.data) === 'object') {
        for (var k in this.data) {
          if (this.data[k] !== undefined) {
            data.append(k, this.data[k]);
          }
        }
      }
      this.props.imageUploading(this.files);
      if (!this.props.isXhr) {
        if (this.props.crop) {
          this.setState({
            hasImage: false
          });
        }
        return typeof callback === 'function' && callback();
      }
      __WEBPACK_IMPORTED_MODULE_9__util_xhr___default()('POST', this.props.url, this.props.header, data, function (res) {
        if (typeof callback === 'function') {
          callback();
        }
        self.uploading = false;
        if (self.props.crop) {
          self.cancel();
        }
        self.props.imageUploaded(res);
      });
    }

    // resize and drag move

  }, {
    key: 'resize',
    value: function resize(e) {
      var $el = e.target.parentElement;
      var $container = this.__find('.g-crop-image-principal');
      var resizedObj = new __WEBPACK_IMPORTED_MODULE_10__util_resize__["a" /* default */]($el, $container, this.props.cropRatio, e);
    }
  }, {
    key: 'drag',
    value: function drag(e) {
      var $el = e.target;
      var $container = this.__find('.g-crop-image-principal');
      var dragObj = new __WEBPACK_IMPORTED_MODULE_11__util_drag__["a" /* default */]($el, $container, e);
    }
  }]);

  return ReactCoreImageUpload;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

ReactCoreImageUpload.propTypes = {
  url: __WEBPACK_IMPORTED_MODULE_6_react___default.a.PropTypes.string,
  text: __WEBPACK_IMPORTED_MODULE_6_react___default.a.PropTypes.string,
  inputAccept: __WEBPACK_IMPORTED_MODULE_6_react___default.a.PropTypes.string,
  inputOfFile: __WEBPACK_IMPORTED_MODULE_6_react___default.a.PropTypes.string,
  class: __WEBPACK_IMPORTED_MODULE_6_react___default.a.PropTypes.array
};
ReactCoreImageUpload.defaultProps = {
  url: '',
  text: 'upload',
  inputAccept: 'image/jpg,image/jpeg,image/png,image/gif',
  inputOfFile: 'file',
  crop: false,
  cropBtn: {
    'ok': 'Save',
    'cancel': 'Cancel'
  },
  class: [],
  extensions: [],
  cropRatio: '1:1',
  maxFileSize: 10485760,
  isXhr: true,
  header: null,
  imageUploaded: function imageUploaded(res) {},
  imageUploading: function imageUploading(res) {
    console.info('uploading');
  },
  imageChanged: function imageChanged() {},
  errorHandle: function errorHandle(err) {
    console.error(err);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ReactCoreImageUpload);

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CoreImageUpload__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_api__ = __webpack_require__(209);














var Logined = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Logined, _Component);

  function Logined(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Logined);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Logined.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Logined)).call(this, props));

    _this.handleRes = _this.handleRes.bind(_this);
    _this.imageChanged = _this.imageChanged.bind(_this);
    _this.imageUploading = _this.imageUploading.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Logined, [{
    key: 'handleRes',
    value: function handleRes(res) {
      var dispatch = this.props.dispatch;

      var userinfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props.userinfo);
      if (res.data) {
        userinfo['head_img'] = res.data.picUrl;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__util_api__["updateBbsUserHeadimg"])(res.data.picUrl).then(function (res) {
          if (res.result) {
            dispatch({ type: 'change user info', userinfo: userinfo });
          }
        });
      }
      if (res['error_code']) {
        this.Toast.show(res['error_code'].error.message);
      }
      this.props.dispatch({ type: 'loading hidden' });
    }
  }, {
    key: 'imageChanged',
    value: function imageChanged() {
      console.log(arguments, 'changed');
    }
  }, {
    key: 'imageUploading',
    value: function imageUploading() {
      this.props.dispatch({ type: 'loading show' });
    }
  }, {
    key: 'render',
    value: function render() {
      var userinfo = this.props.userinfo;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a.container },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a.user },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['user-left'] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_CoreImageUpload__["a" /* default */], {
              text: '',
              className: 'pure-button',
              crop: 'server',
              inputOfFile: 'img',
              cropBtn: { ok: '选取', 'cancel': '取消' },
              url: __WEBPACK_IMPORTED_MODULE_10__util_api__["imgUpload"],
              imageChanged: this.imageChanged,
              imageUploading: this.imageUploading,
              imageUploaded: this.handleRes }),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a.avatar, src: userinfo['head_img'] })
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['user-right'] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'h1',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['nickname'] },
              userinfo.nickname
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['edit-info'] },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'span',
                null,
                '\u7F16\u8F91\u8D44\u6599'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['info'] },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['item'] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['num'] },
              userinfo.userZanNum
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['title'] },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'span',
                null,
                '\u6536\u5230\u7684\u8D5E'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['item'] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['num'] },
              userinfo.userCommentNum
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['title'] },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'span',
                null,
                '\u6536\u5230\u7684\u8BC4\u8BBA'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['item'] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['num'] },
              userinfo.userThreadCollectionNum
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__stylus_mine_logined___default.a['title'] },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'span',
                null,
                '\u88AB\u6536\u85CF'
              )
            )
          )
        )
      );
    }
  }]);

  return Logined;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["b" /* connect */])(function (_ref) {
  var user = _ref.user;
  return user;
})(Logined));

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu__);









var _class = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(_class, _Component);

  function _class() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, _class);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_class.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(_class)).call(this));

    _this.state = {
      menu: [{
        name: '消息提醒',
        icon: 'message',
        mark: true
      }, {
        name: '我的收藏',
        icon: 'collect'
      }, {
        name: '我的帖子',
        icon: 'topic'
      }, {
        name: '我的评论',
        icon: 'comment'
      }, {
        name: '我的任务',
        icon: 'task',
        mark: true
      }]
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(_class, [{
    key: 'render',
    value: function render() {
      var menu = this.state.menu;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a.menu) },
        menu.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: 'mine-menu-' + index, className: __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a.item },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a['icon'], __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a[item.icon]) }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'span',
              { className: __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a['menu-name'] },
              item.name
            ),
            item.mark && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a['mark'] }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_7__stylus_mine_menu___default.a['arrows'] })
          );
        })
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_api__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_webview__ = __webpack_require__(211);












var _class = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(_class, _Component);

  function _class() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, _class);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_class.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(_class)).call(this));

    _this.toLogin = _this.toLogin.bind(_this);
    _this.toRegister = _this.toRegister.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(_class, [{
    key: 'toLogin',
    value: function toLogin() {
      __WEBPACK_IMPORTED_MODULE_8__util_webview__["a" /* default */].ready({
        app: function app(mixins) {
          mixins.loginApp({ refresh: 1, url: '' });
        },
        other: function other() {
          window.location.href = __WEBPACK_IMPORTED_MODULE_7__util_api__["currentHost"] + '/wechat/verify?next=/bbs/mine?source=app';
        }
      });
    }
  }, {
    key: 'toRegister',
    value: function toRegister() {
      __WEBPACK_IMPORTED_MODULE_8__util_webview__["a" /* default */].ready({
        app: function app(mixins) {
          mixins.registerApp({ refresh: 1, url: '' });
        },
        other: function other() {
          window.location.href = __WEBPACK_IMPORTED_MODULE_7__util_api__["currentHost"] + '/wechat/verify?next=/bbs/mine?source=app';
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login___default.a.container },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login___default.a.btn },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'span',
            { onClick: this.toLogin },
            '\u767B\u5F55'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'span',
            null,
            '/'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'span',
            { onClick: this.toRegister },
            '\u6CE8\u518C'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_6__stylus_mine_no_login___default.a.movement },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', null),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', null)
        )
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__helper__);




var isMobile = __WEBPACK_IMPORTED_MODULE_2__helper___default.a.isMobile;
var moves = void 0;
var stopM = void 0;

var Drag = function () {
  function Drag($el, $container, e) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Drag);

    var self = this;
    this.el = $el;
    this.container = $container;
    this.coor = {
      x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft - $el.parentElement.offsetLeft - document.getElementsByClassName('image-aside')[0].offsetLeft,
      y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop - $el.parentElement.offsetTop - document.getElementsByClassName('image-aside')[0].offsetTop,
      posX: isMobile ? e.touches[0]['clientX'] : e.clientX,
      posy: isMobile ? e.touches[0]['clientY'] : e.clientY,
      maxLeft: parseInt(this.container.style.width) - parseInt(this.el.style.width),
      maxTop: parseInt(this.container.style.height) - parseInt(this.el.style.height)
    };
    moves = function moves(ev) {
      self.move(ev);
    };
    stopM = function stopM(ev) {
      self.stopMove(ev);
    };
    if (isMobile) {
      document.addEventListener('touchmove', moves, false);
      document.addEventListener('touchend', stopM, false);
      return;
    }
    document.addEventListener('mousemove', moves, false);
    document.addEventListener('mouseup', stopM, false);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Drag, [{
    key: 'move',
    value: function move(e) {
      if (!this.el) {
        return;
      }
      var aa = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
      var bb = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
      var newPosX = aa - this.el.parentElement.offsetLeft - document.getElementsByClassName('image-aside')[0].offsetLeft - this.coor.x;
      var newPosY = bb - this.el.parentElement.offsetTop - document.getElementsByClassName('image-aside')[0].offsetTop - this.coor.y;
      if (newPosX <= 0) {
        newPosX = 0;
      }
      if (newPosX >= this.coor.maxLeft) {
        newPosX = this.coor.maxLeft;
      }
      if (newPosY <= 0) {
        newPosY = 0;
      }
      if (newPosY >= this.coor.maxTop) {
        newPosY = this.coor.maxTop;
      }
      this.el.style.left = newPosX + 'px';
      this.el.style.top = newPosY + 'px';
    }
  }, {
    key: 'stopMove',
    value: function stopMove() {
      this.el = null;
      if (isMobile) {
        document.removeEventListener('touchmove', moves, false);
        document.removeEventListener('touchend', stopM, false);
        return;
      }
      document.removeEventListener('mousemove', moves, false);
      document.removeEventListener('mouseup', stopM, false);
    }
  }]);

  return Drag;
}();

/* harmony default export */ __webpack_exports__["a"] = (Drag);

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__helper__);


/** Reszie
 * @el  dom
 * @container  dom
 * @ratio  string '1:1' like this
 * e events
 **/


var drags = void 0;
var stopD = void 0;
var isMobile = __WEBPACK_IMPORTED_MODULE_2__helper___default.a.isMobile;
var W = document.body.offsetWidth;
var H = document.body.offsetHeight;

var Resize = function () {
  function Resize($el, $container, ratio, e) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Resize);

    e.stopPropagation();
    var self = this;
    this.coor = {
      x: isMobile ? e.touches[0].clientX : e.clientX,
      y: isMobile ? e.touches[0].clientY : e.clientY,
      w: parseInt(window.getComputedStyle($el).width, 10),
      h: parseInt(window.getComputedStyle($el).height, 10)
    };
    this.splitX = ratio.split(':')[0];
    this.splitY = ratio.split(':')[1];
    this.el = $el;
    this.container = $container;
    drags = function drags(ev) {
      self.drag(ev);
    };
    stopD = function stopD(ev) {
      self.stopDrag(ev);
    };
    if (isMobile) {
      document.addEventListener('touchmove', drags, false);
      document.addEventListener('touchend', stopD, false);
    }
    document.addEventListener('mousemove', drags, false);
    document.addEventListener('mouseup', stopD, false);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Resize, [{
    key: 'drag',
    value: function drag(e) {
      if (!this.el) {
        return;
      }
      var $dotBox = this.container;
      var dotBoxW = parseInt(window.getComputedStyle($dotBox).width);
      var dotBoxH = parseInt(window.getComputedStyle($dotBox).height);
      var $topH = document.querySelector('.info-aside');
      var $halfX = W - dotBoxW;
      var $halfY = H - dotBoxH - window.getComputedStyle($topH).height;
      var resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
      var resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
      if (this.splitX > this.splitY) {
        if (parseInt(resetX) <= $halfX / 2 + dotBoxW) {
          if (parseInt(this.el.offsetWidth) >= dotBoxW) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
          }
          this.el.style.width = this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x + 'px';
          this.el.style.height = parseInt(this.el.offsetWidth) * (this.splitY / this.splitX) + 'px';
          if (dotBoxW > dotBoxH) {
            if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).height)) {
              this.el.style.height = window.getComputedStyle($dotBox).height;
              this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
            }
          } else if (dotBoxW < dotBoxH) {
            if (parseInt(this.el.offsetWidth) >= dotBoxW) {
              this.el.style.width = window.getComputedStyle($dotBox).width;
              this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
            }
          } else if (parseInt(this.el.offsetHeight) >= dotBoxW) {
            this.el.style.width = dotBoxW;
            this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
          }
        }
      } else if (this.splitX < this.splitY) {
        if (parseInt(resetY) <= $halfY / 2 + dotBoxH + window.getComputedStyle($topH).height) {
          this.el.style.height = this.coor.h + (isMobile ? e.changedTouches[0]['clientY'] : e.clientY) - this.coor.y + 'px';
          this.el.style.width = parseInt(this.el.style.height) * (this.splitX / this.splitY) + 'px';
          // 限制拖拉的范围在图片内
          if (dotBoxW > dotBoxH) {
            if (parseInt(this.el.offsetHeight) >= dotBoxH) {
              this.el.style.height = dotBoxH;
              this.el.style.width = dotBoxH * (this.splitX / this.splitY) + 'px';
            }
          } else if (dotBoxW < dotBoxH) {
            if (parseInt(this.el.offsetWidth) >= dotBoxW) {
              this.el.style.width = dotBoxW;
              this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
            }
          } else if (parseInt(this.el.offsetWidth) >= dotBoxW) {
            this.el.style.width = dotBoxW;
            this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
          }
        }
      } else if (parseInt(resetX) <= $halfX / 2 + dotBoxW) {
        this.el.style.width = this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x + 'px';
        this.el.style.height = this.el.style.width;
        // 限制拖拉的范围在图片内
        if (dotBoxW > dotBoxH) {
          if (parseInt(this.el.offsetHeight) >= dotBoxH) {
            this.el.style.height = dotBoxH;
            this.el.style.width = dotBoxH;
          }
        } else if (dotBoxW < dotBoxH) {
          if (parseInt(this.el.offsetWidth) >= dotBoxW) {
            this.el.style.width = dotBoxW;
            this.el.style.height = dotBoxW;
          }
        } else if (parseInt(this.el.offsetWidth) >= dotBoxW) {
          this.el.style.width = this.el.style.height = dotBoxW;
        }
      }
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag() {
      this.el = null;
      if (isMobile) {
        document.removeEventListener('touchmove', drags, false);
        document.removeEventListener('touchend', stopD, false);
      }
      document.removeEventListener('mousemove', drags, false);
      document.removeEventListener('mouseup', stopD, false);
    }
  }]);

  return Resize;
}();

/* harmony default export */ __webpack_exports__["a"] = (Resize);

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

/**
 * simple ajax handler
 **/
module.exports = function (method, url, headers, data, callback, err) {
  var r = new XMLHttpRequest();
  var error = err || function () {
    console.error('AJAX ERROR!');
  };
  // Binary?
  var binary = false;
  if (method === 'blob') {
    binary = method;
    method = 'GET';
  }
  method = method.toUpperCase();
  // Xhr.responseType 'json' is not supported in any of the vendors yet.
  r.onload = function () {
    var json = r.response;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      if (r.status === 401) {
        json = error('access_denied', r.statusText);
      }
    }
    var headers = headersToJSON(r.getAllResponseHeaders());
    headers.statusCode = r.status;
    callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
  };
  r.onerror = function () {
    var json = r.responseText;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      console.error(_e);
    }
    callback(json || error('access_denied', 'Could not get resource'));
  };
  var x = void 0;
  // Should we add the query to the URL?
  if (method === 'GET' || method === 'DELETE') {
    data = null;
  } else if (data && typeof data !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
    // Loop through and add formData
    var f = new FormData();
    for (x in data) {
      if (data.hasOwnProperty(x)) {
        if (data[x] instanceof HTMLInputElement) {
          if ('files' in data[x] && data[x].files.length > 0) {
            f.append(x, data[x].files[0]);
          }
        } else if (data[x] instanceof Blob) {
          f.append(x, data[x], data.name);
        } else {
          f.append(x, data[x]);
        }
      }
    }
    data = f;
  }
  // Open the path, async
  r.open(method, url, true);
  if (binary) {
    if ('responseType' in r) {
      r.responseType = binary;
    } else {
      r.overrideMimeType('text/plain; charset=x-user-defined');
    }
  }
  // Set any bespoke headers
  if (headers) {
    for (x in headers) {
      r.setRequestHeader(x, headers[x]);
    }
  }
  r.send(data);
  return r;
  // Headers are returned as a string
  function headersToJSON(s) {
    var o = {};
    var reg = /([a-z-]+):\s?(.*);?/gi;
    var m = void 0;
    while (m === reg.exec(s)) {
      o[m[1]] = m[2];
    }
    return o;
  }
};

/***/ })

});