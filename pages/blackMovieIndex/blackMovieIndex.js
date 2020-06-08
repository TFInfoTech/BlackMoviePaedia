// pages/blackMovieIndex/blackMovieIndex.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgSrc: [],
  },
  GetMoviePic: function(){
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://data1.library.sh.cn/shnh/dydata/webapi/movie/getHomeFilmBillList?key=c593975e77917bcb4c0f0df95792c4681c0e17a8',
      method:'GET',
      success: function (res) {
        console.log(res.data)
        let listimgeurl=[];
        for(var i=0;i<res.data.data.length;i++){
          listimgeurl.push(res.data.data[i].imgPath)
        }
         that.setData({   
           imgSrc:listimgeurl   
         })
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.GetMoviePic();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})