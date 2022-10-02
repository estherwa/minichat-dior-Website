import {products} from '../data/products'
var util = require('../utils/util')
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
    let that= this;
    let key= "idx"
    util.getStorage({key,success:(res) => {
        that.setData({
            product: res.data
          })
    }});
  }
})