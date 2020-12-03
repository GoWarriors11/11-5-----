Page({
  data: {
    navbar: ["我发起的", "我参加的", "浏览过的"],
    currentTab: 0,
    activityList: [
      {
        theme: "周末烧烤走起",
        detail: "未开始",
        color: "#4A90E2",
        time: "10月17日 周六 14:00-17:00",
        address: "大夫山开心农庄烧烤场",
      },
      {
        theme: "羽毛球比赛",
        detail: "已结束",
        color: " #C3191B",
        time: "0月17日 周六 14:00-17:00",
        address: "天河公园羽毛球馆",
      },
      {
        theme: "每周篮球赛",
        detail: "已取消",
        color: "#9D9D9D",
        time: "0月17日 周六 14:00-17:00",
        address: "天河公园篮球馆",
      },
    ],
  },
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
    });
  },
  showdetail: function() {
    wx.navigateTo({
      url: "../../myactivity/detail/detail",
    });
  },
});
