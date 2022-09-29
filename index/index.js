import {products} from '../data/products'

Page({
  data: {
    products,
    product: products[0],
    transformIdx: 0,
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
})