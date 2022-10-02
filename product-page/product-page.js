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
    this.setData({
      show: true,
      count: this.data.count + 1,
    });

      let key= "idx";
      let dataSet=e.currentTarget.dataset.idx;
        util.setStorage({dataSet,key,success:(res) => {
        
          key: key
          data: e.currentTarget.dataset.idx


         } })




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
