import {products} from '../data/products'
// import {getStorage} from '../utils/util'
import {navigate} from '../utils/util'
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
    const url='../product-page/product-page';
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
  onLoad: function (option) {
    const that= this;
    const key= "idx"
    const eventChannel = this.getOpenerEventChannel()
    
    eventChannel.once('sendData', function(data) {
      success: (data) =>  { console.log(' The request is successful',data.data);
     } 
      that.setData({product: data.data})
    })}

    // wx.navigateTo({url: '../product-page/product-page',            success: function(res) {        
    //      res.eventChannel.once('sendData', function(data) {
    //       success: (data) =>  { console.log(' The request is successful',data.data);
    //      } 
    //        that.setData({product:data.data })} )}}
    // )}
  
})