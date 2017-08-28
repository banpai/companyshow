//index.js
//获取应用实例
var app = getApp()

//调用ajax
const ajax = require('../../utils/util.js').ajax

//订单取消的接口
const index_api = require('../../config').index_api
const newslist_api = require('../../config').newslist_api

Page({
  data: {
    fuji: '#ddd',
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    var that = this;
    console.log(JSON.stringify(app.globalData));
    if (app.globalData.m) {
      that.setData({
        m: app.globalData.m
      });
    } else {
      //获取数据
      ajax(index_api, {}, function (m) {
        that.setData({
          m: m
        });
        app.globalData.m = m;
      });
    }
    if (app.globalData.pic) {
      that.setData({
        pic: app.globalData.pic
      });
    } else {
      //获取数据
      ajax(newslist_api, {}, function (m) {
        that.setData({
          pic: m
        });
        app.globalData.pic = m;
      });
    }
  },
  //拨打电话
  tel: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.m.tel
    });
  },
  //查看图片
  showimg: function (e) {
    console.log(JSON.stringify(e.target.dataset.pic));
    wx.previewImage({
      current: e.target.dataset.pic, // 当前显示图片的http链接
      urls: [e.target.dataset.pic] // 需要预览的图片http链接列表
    })
  },
  //查看更多
  seemore: function () {
    wx.redirectTo({
      url: "../article/article"
    })
  },
  //首页跳转
  sy: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  //导航
  dh: function () {
    var that = this;
    wx.openLocation({
      latitude: Number(that.data.m.latitude),
      longitude: Number(that.data.m.longitude),
      scale: 28
    })
  }
})
