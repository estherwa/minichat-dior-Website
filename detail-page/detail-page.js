import {products} from '../data/products'
Page({
  data: {
    products,
    transformIdx: 0,
    product: products[0],
    position: 'center',
    duration: 300,
    show: false,
    overlay: false,
  },
  showPrev() {
    wx.navigateTo({
      url: '../product-page/product-page',
    }),
    this.setData({
    })
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'idx',
      success: function (res) {
        console.log(res)
        that.setData({
         product: res.data,
        })
      }
    })
  },
})