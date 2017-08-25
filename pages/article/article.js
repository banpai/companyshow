//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    
  },
  //拨打电话
  tel: function(){
    wx.makePhoneCall({
      phoneNumber: '1340000'
    });
  },
  //查看图片
  showimg: function(){
    wx.previewImage({
      current: 'http://www.umelady.com/uploads/allimg/170711/11355a3Z-0.jpg', // 当前显示图片的http链接
      urls: ['http://www.umelady.com/uploads/allimg/170711/11355a3Z-0.jpg'] // 需要预览的图片http链接列表
    })
  },
  //首页跳转
  sy: function(){
    wx.redirectTo({
      url: '../index/index',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  //导航
  dh: function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
})
