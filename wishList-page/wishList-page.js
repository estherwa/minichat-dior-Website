import {products} from '../data/products'
import {navigate} from '../utils/util'
const dataBase=[];
const productDataBase=[];
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
  deleteProduct(e){
    console.log("hola")
   const pressedBag=e.currentTarget.dataset.idx;
    const number = (element) => element == pressedBag.id; 
   const num=dataBase.findIndex(number);
    dataBase.pop(num)
    productDataBase.pop(products[num]);
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
   eventChannel.on( 'sendID' , data=>  {
      console.log("ID OF THE OBJECT SELECTED", data); 
       dataBase.push(data.data ) ;
       if(dataBase.length>0)
       wishList=true;
    console.log("SIZE OF dataBase =",dataBase.length)
    productDataBase.push(products[data.data -1]);
    this.setData({productDataBase:productDataBase, wishList :wishList , dataBase: dataBase}) 
    let temp
      for(let i=0; i<productDataBase.length;i++){
          temp= productDataBase[i]
          console.log("temp", temp )
          console.log("items",dataBase[i])
      }
    })
    this.setData({
      show: true,
      dataBase: this.data.dataBase
    });
}
})