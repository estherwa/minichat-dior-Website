import {products} from '../data/products'
import {getStorage} from '../utils/util'
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
  onLoad: function () {
    const that= this;
    const key= "idx"
    getStorage({key,success:(res) => {
        that.setData({
            product: res.data
          })
    }});
  }
})