// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入微信js-sdk
import wx from 'weixin-js-sdk'
console.log(wx)
var url = location.pathname
var errornum = 0      // 设置定时器
// import axios from 'axios'

import {test} from '../static/js/test.js'

// import {lazyLoadImages,aftLoadImg} from '../static/js/Images.js'
// lazyLoadImages()
// import sign from '../static/js/sign'
// sign()
import mui from '../static/js/mui.js'
mui.init({
  swipeBack: false, // 关闭右滑关闭功能（默认就是false）
  keyEventBind: {
    backbutton: true  // 开启back按键监听（默认就是true）
  },
  statusBarBackground: '#1981D8' // 设置状态栏颜色,仅iOS可用
})
if (mui.os.plus) {
  console.log('mui plusready')
  mui.plusReady(function () {
//     Object.assign('app.Config.device', {
//       isAndroid: plus.os.name === 'Android', // 是否在安卓环境内
//       isIOS: plus.os.name === 'iOS', // 是否在IOS环境内
//       model: plus.device.model, // 设备的型号
//       imsi: plus.device.imsi, // 设备的国际移动用户识别码 ,//Android - 2.2+ (支持): 如果设备没有插入SIM卡，则返回空数组。|iOS - 4.5+ (不支持): iOS设备不支持获取SIM卡信息，返回空数组。
//       vendor: plus.device.vendor, // 设备的生产厂商
//       uuid: plus.device.uuid, // 设备的唯一标识
// // resolutionHeight: plus.screen.resolutionHeight * plus.screen.scale, // 设备屏幕高度分辨率
// // resolutionWidth: plus.screen.resolutionWidtht * plus.screen.scale, // 设备屏幕宽度分辨率，目前好像是空的
// // scale: plus.screen.scale, // 逻辑分辨率与实际分辨率的比例
//       version: plus.os.version, // 系统版本信息
//       osName: plus.os.name // 系统的名称
//     })
    // app.Config.version = plus.runtime.version;
    // app.Config.clientVersion = plus.runtime.innerVersion;
    // initVue();
  })
} else {
  console.log('mui ready')
  test()
  wx.ready(function (res) {
    console.log('wxready')
  })
  wx.error(function (res) {
    console.log('wx error')
    if (res.errMsg === 'config:invalid signature') {
      if (parseInt(errornum) < 1) {
        errornum = parseInt(errornum) + 1
        // jsapierror()
      } else {
        // windown.location.href = rootPath + "wechat/errorpage.html";
        window.location.href = url
      }
    }
  })
}

Vue.config.productionTip = false

Vue.mixin({
  data () {
    return {
      site: '/api/public/index.php/dog'
    }
  },
  created () {
    // test()
    // this.sign()
  },
  methods: {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
