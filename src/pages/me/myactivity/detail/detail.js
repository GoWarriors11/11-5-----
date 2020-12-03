/* eslint-disable no-undef */
// src/pages/index/index.js
// const app = getApp();
// const utils = require("../../utils/utils");
// const dialog = require("../../utils/dialog");
// const loginApi = require("../../api/loginApi");

// const { ResultCode } = require("../../utils/resultCode");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: "张三",
    },
    list: {
      time: "2020年10月10日12:31",
      particulars: "周末去烧烤",
      date: "10月17日",
      week: "周六",
      beginTime: "14:00",
      endTime: "17:00",
      address: "大夫山开心农庄烧烤场",
      detailed: "广州市番禺区禺山西路580号大夫山森林公园南门",
      explain: "不许迟到！不许迟到！不许迟到！重要的话说三遍！",
      aggregate: "50",
      join: "10",
      undetermined: "10",
      absent: "10",
    },
  },
  showchoise: function() {
    wx.showActionSheet({
      itemList: ["参加", "待定", "缺席", "代朋友报名"],
      itemColor: "#000000",
      success: function(res) {
        console.log(res.tapIndex);
        if (res.tapIndex === 3) {
          wx.navigateTo({
            url: "../../../me/signup/signup",
          });
        }
      },
    });
  },
  showcancel: function() {
    wx.showModal({
      content: "取消后用户将不能报名参加活动是否确定取消？",
      cancelText: "我再想想",
      confirmText: "取消活动",
    });
  },
  showdelete: function() {
    wx.showModal({
      content: "删除后活动数据将不能恢复是否确定删除？",
      cancelText: "我再想想",
      confirmText: "删除活动",
      confirmColor: "#FF0000",
    });
  },
});
