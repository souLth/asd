//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    todayUpdate: [],
    recentUpdate: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        console.log(res)
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }, fail: function () {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                    wx.getUserInfo({
                      success: function (res) {
                        this.setData({
                          userInfo: res.userInfo,
                          hasUserInfo: true
                        })
                      }
                    })
                  }
                }, fail: function (res) {

                }
              })
            }
          }
        })
      }, complete: function (res) {


      }
    })
  },
  showMoreDetail:function(){

  },
  getTodayUpdate:function(){

  },
  getRecnetUpdate:function(){
    
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  openSearch: function () {
    console.log(222)
  }
})
