import {products} from '../data/products'
import {navigate} from '../utils/util'
const dataBase=[];
let wishList=false ;
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
  goBack(){
    const url= "../product-page/product-page"
    navigate({url})
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
   const eventChannel = this.getOpenerEventChannel()
   eventChannel.on( 'sendID' ,  data=>  {
      console.log("ID OF THE OBJECT SELECTED", data); 
       dataBase[dataBase.length]= data;
       if(dataBase.length>0)
       wishList=true;
    this.setData({product: products[data.data-1] , wishList :wishList , dataBase: dataBase, } ) 
    console.log("SIZE OF dataBase =",dataBase.length)
    for(let i=0; i<4;i++){
      console.log("items",dataBase[i])
    }
    })
    this.setData({
      show: true,
      dataBase: this.data.dataBase
    });
}
})