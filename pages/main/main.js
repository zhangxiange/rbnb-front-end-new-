const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  search: function(e) {
    // console.log(2222, e.detail.value)
    // wx.request({
    //   url: `http://localhost:3000/api/v1/posts?query=${e.detail.value}`,
    //   method: 'get',
    //   success: function (res) {
    //     const posts = res.data.posts;

        wx.navigateTo({
          url: `../browse/browse?value=${e.detail.value}`
        });
    //   }
    // })
  },
  buy: function (e) {
    wx.navigateTo({
      url: '/pages/browse/browse',
    })
  },


  sell: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})