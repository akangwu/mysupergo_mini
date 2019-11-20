// pages/home/home.js
import {getMultiData} from '../../network/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getMultiData().then(res => {
      // 1.获取数据
      console.log(res)
      // 2.获取轮播图数据
      const banners=res.data.data.banner.list
      // 3.获取推荐数据
      const recommend=res.data.data.recommend.list
      console.log(banners)
      console.log(recommend)
      this.setData({
        banners:banners,
        recommend:recommend
      })
    })
  }

})