import {products} from '../data/products'

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    products,
    product: products[0],
    transformIdx: 0,
    product:{},
    position: 'center',
    duration: 300,
    show: false,
    overlay: false,
    count:0,
  },
  
  goNextPage(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  showNext(e) {
    const idx = e.currentTarget.dataset.idx

    this.setData({
      show: true,
      product: products[idx],
      transformIdx: idx,
      count:this.data.count+1
    })
    wx.setStorage({ key: 'idx', data: e.currentTarget.dataset.idx,
     success: function (res) {
        console.log(res)
     }
   })
   wx.navigateTo({
    url: '../index2/index2',
  });

  },
  showPrev() {
    wx.navigateTo({
      url: '../index/index',
    }),
    this.setData({
      show: false
    })
  },
  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },
  onLoad: function (options) {
    this.setData({
      count:1
    });
    const aaa = "dsdsd"
    console.log(this.data.count);
    this.setData({
      count:2
    },() => console.log());
    console.log(this.data.count);
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})