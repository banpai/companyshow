function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//封装获取数据的方式
function ajax (url, data, fun, post) {
  wx.showLoading({
    title: '加载中',
  });
  var method = "GET";
  var header = {
    'content-type': 'application/json'
  };
  if (post) {
    method = "POST";
    header = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  console.log(method);
  //获取数据
  wx.request({
    url: url,
    method: method,
    data: data,
    header: header,
    success: function (res) {
      wx.hideLoading();
      fun(res.data);
    },
    fail: function(){
      console.log('111');
      wx.hideLoading();
      wx.showToast({
        title: '接口调用失败',
        icon: 'loading',
        duration: 2000
      })
    }
  });
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  ajax: ajax
}
