Component({
  data:{} ,
  properties: {
    title:{
      type:String, 
      value: 'add to cart'},
    count:{
    type:String, 
    value: 'default value'},},
  methods: {
    onTap: function(e){
      const myEventDetail = {} // detail object, provided to the event monitoring function
      var myEventOption = {} // Event triggering options
      this.triggerEvent('myevent', myEventDetail, myEventOption)
      wx.navigateTo({
        url: '/product-page/product-page',
    }),
    this.setData({
    })
      console.log("its working");
    
     


    
  }}
})



