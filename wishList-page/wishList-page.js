import {products} from '../data/products'
import {navigate} from '../utils/util'
import {once} from '../utils/event'
let  page_data;
const Database=[];
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
   const eventChannel = this.getOpenerEventChannel()
   eventChannel.on( 'sendID' ,  function  ( data )  {
    console.log("data que temnemos", data); 
    page_data = data; 
    Database[Database.length]= page_data;

    that.setData({product: products[data.data-1]})
    
    console.log("SIZE BASE",Database.length)
    for(let i=0; i<Database.length;i++){
    console.log("items",Database[i])
  }
    
   

})
}
})