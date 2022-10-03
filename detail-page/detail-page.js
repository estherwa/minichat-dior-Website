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
    eventChannel.emit('acceptDataFromOpenedPage', {data:
      wx.getStorage({key,success:(res) => {
        that.setData({
            product: res.data
          })
      }})
    });
    eventChannel.on('acceptDataFromOpenerPage', function(dataa) {

      
      //here we get informaton of the oter pag
      console.log(dataa)
    })
    


  }
})