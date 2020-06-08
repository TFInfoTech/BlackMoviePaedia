// pages/blackMovieList/blackMovieList.js
Page({

  /**
   * Page initial data
   */
  data: {
    filmllist: []
  },
  GetMovielist: function () {
    var that = this //不要漏了这句，很重要
    wx.request({
      url: 'https://data1.library.sh.cn/shnh/dydata/webapi/movie/getMovie?key=c593975e77917bcb4c0f0df95792c4681c0e17a8&pageth=1&type=黑白',
      method: 'GET',
      success: function (res) {
        console.log(res.data.data);

        if (res.data.data.length > 0) {
          let list1 = [];
          for (var i = 0; i < res.data.data.length; i++) {
            wx.request({
              url: 'https://data1.library.sh.cn/shnh/dydata/webapi/movie/movieDetail?key=c593975e77917bcb4c0f0df95792c4681c0e17a8&uri=' + res.data.data[i].uri,
              method: 'GET',
              success: function (res) {
                console.log('123', res.data.data[0]);
                let filmdetail = {};
                filmdetail.filmtitle = res.data.data[0].name;
                filmdetail.filmdate = res.data.data[0].date;
                if (res.data.data[0].hasOwnProperty("video")) {
                  filmdetail.videourl = res.data.data[0].video[0].videoPath;
                  filmdetail.videotitle = res.data.data[0].video[0].title==null?'':res.data.data[0].video[0].title;
                }
                list1.push(filmdetail);
                that.setData({   
                  filmllist:list1   
                })
              }
            })
          }
                

        }
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.GetMovielist();
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