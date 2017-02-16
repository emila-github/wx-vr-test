// 获取全局应用程序实例对象
  const app = getApp()
// 创建页面实例对象
  Page({
    data: {
      // citys: app.globalData.citys, // 这样引用全局无效
      // currentCity: app.globalData.currentCity,
      imgUrls: [
        'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/uOHbLPblfuifjxF-gLCIVa.jpg',
        'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/jeRyYeblfuiflAe-YLKljn.jpg',
        'http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/StVpECblfuifnwB-gSgGkD.jpg'
      ],
      showFilterSubGametypesAll: true,
      gametypes: [
        {
          id: 1,
          name: '体育竞速'
        },
        {
          id: 2,
          name: '冒险解密'
        },
        {
          id: 3,
          name: '动作格斗'
        },
        {
          id: 4,
          name: '音乐舞蹈'
        },
        {
          id: 5,
          name: '休闲益智'
        },
        {
          id: 6,
          name: '射击飞行'
        },
        {
          id: 7,
          name: '生存恐怖'
        },
        {
          id: 8,
          name: '即时战略'
        },
        {
          id: 9,
          name: '沙盒模拟'
        },
        {
          id: 10,
          name: '桌面棋牌'
        },
        {
          id: 11,
          name: '角色扮演'
        }
      ],
      listData: [],
      loading: true, // 是否加载中
      hasMore: true, // 是否有更多数据
      // city: 1101,
      pageNo: 1,
      pageSize: 12
    },
    // 更新列表
    refurbishList () {
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
      this.setData({
        listData: [],
        loading: true, // 是否加载中
        hasMore: true, // 是否有更多数据
        pageNo: 1,
        city: app.globalData.currentCity.code
      })
      this.handleLoadMore()
    },
    onLoad () {
      this.setData({
        city: app.globalData.currentCity.code
      })
      this.handleLoadMore()
      console.log('index.currentCity===', app.globalData)
    },
    onShow () {
      this.setData({
        city: app.globalData.currentCity.code,
        citys: app.globalData.citys,
        currentCity: app.globalData.currentCity
      })
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail)
      // 更新全局函数
      app.globalData.currentCity = app.globalData.citys[e.detail.value]
      // 更新本页数据 只更新全局 本页面数据不更新
      this.setData({
        currentCity: app.globalData.citys[e.detail.value]
      })
      this.refurbishList()
    },
    setFilterPanel: function (e) { // 展开筛选面板
      const d = this.data
      const i = e.currentTarget.dataset.index
      if (d.showfilterindex === i) {
        this.setData({
          showfilter: false,
          showfilterindex: null
        })
      } else {
        this.setData({
          showfilter: true,
          showfilterindex: i
        })
      }
      console.log('显示第几个筛选类别：' + d.showfilterindex)
    },
    setFilterPanelSubSort: function (e) { // 选择排序依据
      console.log('setFilterPanelSubSort', e.currentTarget.dataset)
      const d = this.data
      const id = e.currentTarget.dataset.id
      if (d.showFilterSubSortIndex === id) {
        this.setData({
          showFilterSubSortIndex: null
        })
      } else {
        this.setData({
          showFilterSubSortIndex: id
        })
      }
      this.refurbishList()
    },
    setFilterPanelSubActivetype: function (e) { // 选择活动类型
      console.log('setFilterPanelSubActivetype', e.currentTarget.dataset)
      const d = this.data
      const id = e.currentTarget.dataset.id
      let activetypes = d.showFilterSubActivetypesIndex || []
      let flag = d.showFilterSubActivetypesFlag || {}
      console.log(activetypes, activetypes.indexOf(id))
      if (activetypes.indexOf(id) === -1) {
        activetypes.push(id)
        flag[id] = true
      } else {
        activetypes.splice(activetypes.indexOf(id), 1)
        flag[id] = false
      }
      this.setData({
        showFilterSubActivetypesIndex: activetypes,
        showFilterSubActivetypesFlag: flag
      })
      this.refurbishList()
    },
    setFilterPanelSubGametypes: function (e) { // 选择游戏类型
      console.log('setFilterPanelSubGametypes', e.currentTarget.dataset)
      const d = this.data
      const id = e.currentTarget.dataset.id
      let gametypes = d.showFilterSubGametypesIndex || []
      let flag = d.showFilterSubGametypesFlag || {}
      console.log(gametypes, gametypes.indexOf(id))
      if (gametypes.indexOf(id) === -1) {
        gametypes.push(id)
        flag[id] = true
      } else {
        gametypes.splice(gametypes.indexOf(id), 1)
        flag[id] = false
      }
      this.setData({
        showFilterSubGametypesIndex: gametypes,
        showFilterSubGametypesFlag: flag,
        showFilterSubGametypesAll: gametypes.length ? '' : true
      })
      this.refurbishList()
    },
    setFilterPanelSubGametypesAll: function (e) { // 选择全部游戏类型
      this.setData({
        showFilterSubGametypesIndex: [],
        showFilterSubGametypesFlag: {},
        showFilterSubGametypesAll: true
      })
      this.refurbishList()
    },
    handleLoadMore () {
      console.log('handleLoadMore')
      let that = this
      const d = this.data
      if (!this.data.hasMore) return
      this.setData({
        loading: true
      })
      let params = {
        city: this.data.city,
        pageNo: this.data.pageNo++,
        pageSize: this.data.pageSize
      }
      if (d.showFilterSubSortIndex) {
        params['sort'] = d.showFilterSubSortIndex
      }
      if (d.showFilterSubActivetypesIndex && d.showFilterSubActivetypesIndex.length) {
        params['activeType'] = d.showFilterSubActivetypesIndex.join(',')
      }
      if (d.showFilterSubGametypesIndex && d.showFilterSubGametypesIndex.length) {
        params['gameType'] = d.showFilterSubGametypesIndex.join(',')
      }
      console.log('handleLoadMore', params)
      app.vr.list(params)
        .then(function (res) {
          console.log(res.data)
          let listData = that.fatData(res.data)
          if (listData.length) {
            that.setData({
              listData: that.data.listData.concat(listData),
              loading: false
            })
          } else {
            that.setData({
              hasMore: false,
              loading: false
            })
          }
          if (listData.length < res.data.pageSize) {
            that.setData({
              hasMore: false,
              loading: false
            })
          }
        })
    },
    fatData (datas) {
      var listData = datas.listData || []
      for (let i = 0, len = listData.length; i < len; i++) {
        let item = listData[i]
        let activeType = item.activeType || ''
        let activeTypes = activeType.split(',') || []
        item.type1 = activeTypes.indexOf('1') !== -1
        item.type2 = activeTypes.indexOf('2') !== -1
        item.type3 = activeTypes.indexOf('3') !== -1
        let total = 5
        let level = +item.level
        item.levelPercent = level / total * 100
      }
      return listData
    }
  })
