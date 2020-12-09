const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    dataList: [{ item: "我发起的", Num: 3 }, { item: "我参与的", Num: 6 }, { item: "浏览过的", Num: 15 }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        that.setUserInfo(res.userInfo);
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          that.setUserInfo(res.userInfo);
        },
      });
    }
  },

  getUserInfo: function(e) {
    this.setUserInfo(e.detail.userInfo);
  },

  setUserInfo: function(userInfo) {
    if (userInfo !== null) {
      app.globalData.userInfo = userInfo;
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
      });
    }
  },

  /**
   * 查看用户是否授权
   */
  getSetting: function() {
    const _this = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        console.log(res);
        if (res.authSetting["scope.userInfo"]) {
          _this.setData({
            isAuthorize: true,
          });
          // TODO 如果用户授权了,需要显示用户头像
          _this.getUserInfo();
        } else {
          _this.setData({
            isAuthorize: false,
          });
        }
      },
    });
  },

  // 点击触发事件，跳转页面
  // showdetail: function() {
  //   wx.navigateTo({
  //     url: "../myactivity/index/index",
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  // eslint-disable-next-line no-dupe-keys
  onLoad: async function(options) {
    // this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},
});
