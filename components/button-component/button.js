import { products } from "../../data/products"
import { navigate} from "../../utils/util"
Component({
  data:{ 
    products,
    transformIdx: 0,
    product: products[0],
    position: 'center',
    duration: 300,
    show: false,
    overlay: false,
      } ,
   
  properties: {
    id_bag :{
        type:String, 
        value: '6'},
    title:{
      type:String, 
      value: 'add '},
    count:{
    type:String, 
    value: 'default value'}},
  methods: {
    onTap: function(e){
      const myEventDetail = {} // detail object, provided to the event monitoring function
      var myEventOption = {} // Event triggering options
      console.log("id", this.properties.id_bag);
      let id_bag= this.properties.id_bag;
      this.triggerEvent('myevent', myEventDetail, myEventOption)
      
      const url='/wishList-page/wishList-page';
      navigate({
    
      url, 
      success:(res) =>{
        res.eventChannel.emit('sendID' , {data: id_bag})
      }, 
      events:{ 
        acceptDataFromOpenedPage: function(data) {
          console.log("data", data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      }})
      
  }}
})



