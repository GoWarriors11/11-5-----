// pages/index/detail/detail.js
Page({
  data: {
    dataList: [
      { title: "参加", backgroundcolor: "hsla(119, 74%, 39%, 1)" },
      { title: "待定", backgroundcolor: "hsla(212, 72%, 59%, 1)" },
      { title: "缺席", backgroundcolor: "hsla(359, 77%, 43%, 1)" },
    ],
  },
  showchoise: function() {
    wx.showActionSheet({
      itemList: ["参加", "待定", "缺席", "代朋友报名"],
      itemColor: "#000000",
      success: function(res) {
        console.log(res.tapIndex);
        if (res.tapIndex === 3) {
          wx.navigateTo({
            url: "../../me/signup/signup",
          });
        }
      },
    });
  },
  showDialogBtn: function() {
    const that = this;
    that.setData({
      showModal: true,
    });
  },
});
