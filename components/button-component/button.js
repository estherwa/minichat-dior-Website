Component({
  data:{
    count:[]
  },
  properties: {
    count:{
    type:String, 
    value: 'default value'},},
  methods: {
    onTap: function(){
      var myEventDetail = {} // detail object, provided to the event monitoring function
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



