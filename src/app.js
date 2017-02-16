/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
const vr = require('./utils/vr.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'vr 17173',
    version: '1.0.0'
  },
  globalData: {
    // currentCity: 0,
    // citys: [
    //   {
    //     code: 1,
    //     name: '北京',
    //     name2: '北京2'
    //   },
    //   {
    //     code: 2,
    //     name: '上海',
    //     name2: '上海2'
    //   }]
  },
  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * vr API
   */
  vr: vr,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    console.log(' ========== Application is launched ========== ')
    let that = this
    vr.getCitysInfo().then(function (res) {
      console.log('getCitysInfo===', res.data)
      let cityList = res.data.cityData[0]['list']

      that.globalData.citys = cityList
      that.globalData.currentCity = res.data.localtionCity
      console.log('app.globalData===', that.globalData)
    })
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(' ========== Application is hid ========== ')
  }
})
