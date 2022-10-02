import { products } from "../data/products";
var util = require('../utils/util')
Page({
  data: {
    products,
    product: products[0],
    transformIdx: 0,
    position: "center",
    duration: 300,
    show: false,
    overlay: false,
    count: 0,
  },
  goNextPage() {
    wx.navigateTo({
      url: "../product-page/product-page",
    });
  },
  showNext(e) {
    const idx = e.currentTarget.dataset.idx;
    this.setData({
      show: true,
      count: this.data.count + 1,
    });
  util.setStorage(e);
    wx.navigateTo({
      url: "../detail-page/detail-page",
    });
  },
  showPrev() {
    wx.navigateTo({
      url: "../product-page/product-page",
    }),
      this.setData({
        show: false,
      });
  },
});
