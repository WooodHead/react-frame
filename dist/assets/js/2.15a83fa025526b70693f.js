/*! This file is created by fangbao */
webpackJsonp([2],{576:function(t,e,a){a(598);var i=a(5)(a(591),a(609),"data-v-6b362e3a",null);i.options.__file="/Users/gaoyanru/Documents/wanglibao/BBS/src/views/topicDetail.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),i.options.functional,t.exports=i.exports},591:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(133);e.default={components:{ScrollWrapper:i.ScrollWrapper,WlbHeader:i.WlbHeader,CommentFormModal:i.CommentFormModal,ShareIcon:i.ShareIcon,CommentList:i.CommentList},data:function(){return{item:{},loaded:!1,options:{}}},computed:{id:function(){return parseInt(this.$route.params.id)}},created:function(){var t=this;this.$plugin.loading.show(!0,"full"),this.$http({url:this.$api.api_list,method:"getBbsThreadDetail",params:[{id:this.id}]}).then(function(e){0===e.data.result.code&&e.data.result.data?(t.loaded=!0,t.item=e.data.result.data,t.options={content:t.$filters.msubstring(t.item.content,0,64)}):t.$router.replace({name:"index"}),t.$plugin.loading.show(!1)})},methods:{}}},598:function(t,e){},609:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loaded?i("div",{staticClass:"view"},[i("wlb-header",[i("span",{slot:"title"},[t._v("帖子详情")]),t._v(" "),i("share-icon",{attrs:{options:t.options},slot:"right"})],1),t._v(" "),i("scroll-wrapper",[i("div",{staticClass:"container bg-color-white"},[i("div",{staticClass:"topic-head"},[i("div",{staticClass:"topic-avatar mr-20"},[i("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:{placeholder:a(69)},expression:"{ placeholder: require('../imgs/avatar_defult_big.png') }"}],attrs:{src:t.item.user.head_img}})]),t._v(" "),i("div",{staticClass:"topic-info"},[i("p",[i("span",{staticClass:"topic-author"},[t._v(t._s(t.item.user.nickname))])]),t._v(" "),i("p",[i("span",{staticClass:"topic-time"},[t._v(t._s(t.item.created_at))])])])]),t._v(" "),i("div",{staticClass:"topic-content mt-20"},[i("p",[t._v(t._s(t.item.content))])])]),t._v(" "),i("comment-list",{staticClass:"mb-20",attrs:{id:t.id}}),t._v(" "),i("div",{staticStyle:{height:"1.2rem"}})],1),t._v(" "),i("comment-form-modal",{attrs:{id:t.id}})],1):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0}});