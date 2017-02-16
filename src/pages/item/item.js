  // mock数据
  var __actives = [
    {
      activeInfo: {
        // （原价）
        costPrice: 100,
        // （折扣价）
        discountPrice: 100,
        // （消费价格）
        price: 100,
        // （赠品）
        gift: '赠品'
      },
      deliveredFlag: true,  // 是否公布名单
      details: `<p>1.筛选用户旨在挑选出熟悉本类产品，能全面、准确反映产品优缺点的用户</p>
                                <p>2.同类产品30天之内用户不得再次中签 众测君将根据值友在我站的投稿（非匿名）来判断专业度</p>
                                <p>3.众测计划也是众测君参考的重要因素，值友还可以将自己众测该产品的优势写在这里</p>`,    // 活动详情
      endTime: 1477277679424,         // 活动结束时间，时间戳
      deadline: 1483000167057,             // 体验截止时间(新增字段)
      id: 0,              // 活动id
      number: 100,            // 数量
      startTime: 1476688919543,       // 活动开始时间
      type: 1,              // 1、免费体验 2、优惠折扣 3、到店有礼
      name: '免费体验'
    },
    {
      activeInfo: {
        costPrice: 100, // （原价）
        discountPrice: 100, // （折扣价）
        price: 100, // （消费价格）
        gift: '赠品' // （赠品）
      },
      deliveredFlag: true,  // 是否公布名单
      details: `<p>1.筛选用户旨在挑选出熟悉本类产品，能全面、准确反映产品优缺点的用户</p>
                                <p>2.同类产品30天之内用户不得再次中签 众测君将根据值友在我站的投稿（非匿名）来判断专业度</p>
                                <p>3.众测计划也是众测君参考的重要因素，值友还可以将自己众测该产品的优势写在这里</p>`,    // 活动详情
      endTime: 1477277679424,         // 活动结束时间，时间戳
      deadline: 1483000167057,             // 体验截止时间(新增字段)
      id: 0,              // 活动id
      number: 200,            // 数量
      startTime: 1476688919543,       // 活动开始时间
      type: 2,              // 1、免费体验 2、优惠折扣 3、到店有礼
      name: '优惠折扣'
    },
    {
      activeInfo: {
        costPrice: 100, // （原价）
        discountPrice: 100, // （折扣价）
        price: 100, // （消费价格）
        gift: '暴风魔镜' // （赠品）
      },
      deliveredFlag: true,  // 是否公布名单
      details: `<p>1.筛选用户旨在挑选出熟悉本类产品，能全面、准确反映产品优缺点的用户</p>
                                <p>2.同类产品30天之内用户不得再次中签 众测君将根据值友在我站的投稿（非匿名）来判断专业度</p>
                                <p>3.众测计划也是众测君参考的重要因素，值友还可以将自己众测该产品的优势写在这里</p>`,    // 活动详情
      endTime: 1477277679424,         // 活动结束时间，时间戳
      deadline: 1483000167057,             // 体验截止时间(新增字段)
      id: 0,              // 活动id
      number: 300,            // 数量
      startTime: 1476688919543,       // 活动开始时间
      type: 3,              // 1、免费体验 2、优惠折扣 3、到店有礼
      name: '到店有礼'
    }
  ]
  var mockDatas = {
    isActive: true, // 是否正在进行活动
    activeType: '1,2,3',
    actives: __actives,
    address: '福州晋安区东二环泰禾广场4楼3C',       // 详细地址
    appointFlag: '0.5',        // 是否需要预约，0：不用预约，0.5：提前半天， 1：提前1天
    city: 'string',           // 城市编码
    cityName: '福州',           // 城市名称
    district: 'string',      // 地区编码
    locationUrl: 'http://map.baidu.com/?s=inf%26uid%3D5efa227120c1223782a12e7d%26c%3D300&i=0&sr=1',          // 地图定位地址
    id: 1,                    // 门店id
    level: 3.5,                // 门店星级
    name: 'VR陀螺体验馆',          // 门店名称
    phone: '0591 - 83636884',         // 门店电话
    price: 99.99,                 // 平均消费价格
    province: 'string',       // 省份编码
    recommendFlag: true,     // 是否是173推荐
    uv: 5000,                   // 感兴趣人数
    week: '周一至周日10:00 - 22:00',          // 门店 营业时间
    // 门店详情
    details: `<p class="img"><a href="#"><img src="http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x200.jpg" alt=""></a></p>
             <div class="txt">拥有独特的外观、机身、键帽、钢板全部都是与众同的蓝色； 区别于其他品牌机械键盘的塑料底座，蓝血人机械键盘采用了全铝合金金属一体成型底座，在使用体验上进步明显；强大RGB灯光管控性能，雷神专属驱动能对每一颗按键的灯光1678万色的单独定义。灯光调节快捷“Fn+Insert”色彩随心所欲； 优质防尘防水性能蓝血人机械键盘拥有良好的底座导水孔设计，确保键盘的使用安全和使用寿命。</div>`,
    parkingInfo: -1,           // 是否由停车位，0：没有，1：有免费车位，-1：有付费车位
    wifiFlag: true,           // 是否有wifi
    storeImageVos: [// 大眼睛图
      {
        smallImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=1&type=smallImage',
        largeImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=1&type=normalImage',
        mainFlag: true
      },
      {
        smallImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=smallImage',
        largeImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=normalImage',
        mainFlag: false
      },
      {
        smallImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=smallImage',
        largeImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=normalImage',
        mainFlag: false
      },
      {
        smallImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=smallImage',
        largeImage: 'http://ue1.17173cdn.com/a/vr/xx/2016/m/img/img640x300.jpg?id=2&type=normalImage',
        mainFlag: false
      }
    ]
  }

  // 获取全局应用程序实例对象
  const app = getApp()
  // 创建页面实例对象
  var WxParse = require('../wxParse/wxParse.js')
  Page({
    data: {
      storeId: null,
      article: mockDatas.details,
      // citys: app.globalData.citys,
      // currentCity: app.globalData.currentCity,
      imgUrls: [
        'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/uOHbLPblfuifjxF-gLCIVa.jpg',
        'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/jeRyYeblfuiflAe-YLKljn.jpg',
        'http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/StVpECblfuifnwB-gSgGkD.jpg'
      ],
      indicatorActiveColor: '#55e1d2',
      indicatorColor: '#b7b7b7',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    },
    onLoad (options) {
      var that = this
      that.setData({
        storeId: options.storeId
      })

      // get数据后设置到data

      that.setData({
        data: mockDatas
      })

      WxParse.wxParse('article', 'html', that.data.article, that, 5)
    },
    onShow () {
      this.setData({
        citys: app.globalData.citys,
        currentCity: app.globalData.currentCity
      })
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      app.globalData.currentCity = app.globalData.citys[e.detail.value]
      this.setData({
        currentCity: app.globalData.citys[e.detail.value]
      })
    },
    mapTap () {
      wx.navigateTo({
        url: '../map/map?id=1'
      })
    },
    joinTap () {
      wx.navigateTo({
        url: '../join/join?storeId=' + this.data.storeId
      })
    },
    telTap () {
      wx.makePhoneCall({
        phoneNumber: '10086' // 仅为示例，并非真实的电话号码
      })
    },
    // 分享
    onShareAppMessage: function () {
      return {
        title: '自定义分享标题',
        desc: '自定义分享描述',
        path: 'item/item?storeId=ID'
      }
    }
  })
