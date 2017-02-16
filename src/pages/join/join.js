let reTel = /^\d{6,13}$/
let reQq = /^\d{5,11}$/
let invalidMsgs = {
  tel: '手机格式不正确（6 到 13 位数字）',
  qq: 'QQ号码格式不正确（5 到 11 位数字）'
}

Page({
  data: {
    storeId: null,
    actives: [
      {
        id: 12,
        checked: true,
        name: '免费体验'
      },
      {
        id: 12,
        checked: false,
        name: '优惠折扣'
      },
      {
        id: 13,
        checked: false,
        name: '到店有礼'
      }
    ]
  },
  onLoad (options) {
    var that = this
    that.setData({
      storeId: options.storeId
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  formSubmit (e) {
    var params = e.detail.value || {}
    if (params['protocol'].length <= 0) {
      wx.showModal({
        title: '提示',
        content: '详细阅读17173线下体验免责声明后继续',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return
    }

    params['storeId'] = this.data.storeId
    for (let i = 0, len = params['activeId'].length; i < len; i++) {
      // params['storeId[' + i + ']'] = params['activeId'][i]
      params[`storeId[${i}]`] = params['activeId'][i]
    }

    if (!this.checkParams(params)) {
      return
    } else {
      wx.showToast({
        title: '资料提交中',
        icon: 'loading',
        duration: 10000
      })
    }

    wx.request({
      url: 'http://vrlive.test.17173.com/ty/active/join', // 仅为示例，并非真实的接口地址
      data: params,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.hideToast()
        if (res.data.result === 'success') {
          wx.showModal({
            title: '提示',
            content: '感谢您的参与，如活动申请成功，我们将以短信的方式通知您！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      }
    })
  },
  checkParams: function (params) {
    let _params = params || {}
    let errMsgs = []
    if (!_params['activeId'].length) {
      errMsgs.push('请选择您要参与的活动')
    }
    if (!_params['name']) {
      errMsgs.push('姓名不能为空')
    }
    if (!_params['phone']) {
      errMsgs.push('手机不能为空')
    }
    if (_params['phone'] && !reTel.test(_params['phone'])) {
      errMsgs.push(invalidMsgs.tel)
    }
    if (!_params['qq']) {
      errMsgs.push('QQ不能为空')
    }
    if (_params['qq'] && !reQq.test(_params['qq'])) {
      errMsgs.push(invalidMsgs.qq)
    }
    if (!_params['reason']) {
      errMsgs.push('理由不能为空')
    }
    if (errMsgs.length) {
      wx.showModal({
        title: '提示',
        content: errMsgs.join(';'),
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false
    }
    return true
  }
})
