//index.js
//获取应用实例
var app = getApp()

//调用ajax
const ajax = require('../../utils/util.js').ajax

//订单取消的接口
const index_api =  require('../../config').index_api

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    //获取数据
    ajax(index_api, {}, function(m){
      that.setData({
        m: m
      });
      console.log(m);
    });
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
  //查看更多
  seemore: function(){
    wx.redirectTo({
      url:"../article/article"
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
    var that = this;
    wx.openLocation({
      latitude: Number(that.data.m.latitude),
      longitude: Number(that.data.m.longitude),
      scale: 28
    })
  }
})
