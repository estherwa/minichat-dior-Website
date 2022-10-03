import {products} from "../data/products";
import {setStorage} from "../utils/util";
import {navigate} from '../utils/util'
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
    const url="../product-page/product-page";
    navigate({
      url, 
      success:(res) =>{
        res.eventChannel.emit('acceptDataFromOpenerPage')
      }, 
      events:{ 
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      }})
  },
  showNext(e) {
    this.setData({
      show: true,
      count: this.data.count + 1,
    });
    const key= "idx";
    const dataSet=e.currentTarget.dataset.idx;
      const url="../detail-page/detail-page";
      wx.navigateTo({
        url:url, 
        success:(res) =>{
          res.eventChannel.emit(setStorage({dataSet,key}))
        }, 
        events:{ 
          acceptDataFromOpenedPage: function(data) {
          },
          someEvent: function(data) {
            console.log(data)
          }
        }})
  },

  
  showPrev() {
   const url="../product-page/product-page";
    navigate({
      url, 
      success:(res) =>{
        res.eventChannel.emit('acceptDataFromOpenerPage')
      }, 
      events:{ 
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      }})
      this.setData({
        show: false,
      });
  },
});
