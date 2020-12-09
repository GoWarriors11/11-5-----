// src/pages/post/post.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    maxNumber: 200, // 可输入最大字数
    number: 0, // 已输入字数
    date: "2020-11-11",
    time: "9:00",
    region: ["广东省", "广州市", "海珠区"],
  },

  inputText: function(e) {
    const value = e.detail.value; // 获取textarea的内容，
    const len = value.length; // 获取textarea的内容长度
    this.setData({
      number: len,
    });
  },
  showtip: function() {
    wx.showModal({
      title: "",
      content: "开启后，参与人可以在报名页面订阅提醒通知",
      showCancel: false,
      confirmText: "确定",
      confirmColor: "#3CC51F",
    });
  },
  bindDateChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      date: e.detail.value,
    });
  },
  bindTimeChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      time: e.detail.value,
    });
  },
  bindRegionChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      region: e.detail.value,
    });
  },
  switch1Change: function(e) {
    console.log(`Switch样式点击后是否选中：`, e.detail.value);
  },
});
