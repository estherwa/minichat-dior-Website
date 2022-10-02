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
    // util.getStorage()

    var that= this;
    function getStorage() {
      console.log("hello");
    
      wx.getStorage({
        key: "idx",
        success: function (res) {
          that.setData({
          })
          that.setData({
             product: res.data,
            })
        },
      });
    }

  },
})