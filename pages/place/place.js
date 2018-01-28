// pages/place/place.js
// pages/photo/photo.js

Page({
  data: {
     latitude: [30.059780,30.543260, 30.141100], 
      longitude: [103.857980,114.362120,104.635530],
      name:["眉山","武汉","资阳"],
      address:["我的家乡","我的大学","我现在的城市"],
   
    controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
 


gotoPlace1:function(){
  var latitude=this.data.latitude[0]
  var longitude=this.data.longitude[0]
  var name=this.data.name[0]
  var address=this.data.address[0]
 wx.openLocation({  latitude: latitude,      longitude: longitude,   name:name, address:address,  scale: 28     }) 
  },

  gotoPlace2:function(){
  var latitude=this.data.latitude[1]
  var longitude=this.data.longitude[1]
   var name=this.data.name[1]
  var address=this.data.address[1]
 wx.openLocation({  latitude: latitude,      longitude: longitude,   name:name, address:address, scale: 28     }) 
  },

  gotoPlace3:function(){
  var latitude=this.data.latitude[2]
  var longitude=this.data.longitude[2]
   var name=this.data.name[2]
  var address=this.data.address[2]
 wx.openLocation({  latitude: latitude,      longitude: longitude,    name:name, address:address,   scale: 28     }) 
  },





whereAreYou:function(){
   {    var that = this
    wx.getLocation({
      type: 'gcj02',   

      success: function (res) {   
      var latitude = res.latitude  
      var longitude = res.longitude    
      var speed = res.speed   
      var accuracy = res.accuracy     
that.setData( {
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
     wx.openLocation({latitude: latitude, longitude: longitude, scale: 28 }) 
      } 
    })  
}
},
//根据经纬度在地图上显示
  openLocation: function( e ) {
    var value = e.detail.value
    wx.openLocation( {
      longitude: Number(value.longitude ),
      latitude: Number(value.latitude )
    })
  },

whereToGo:function(){
  wx.showModal({
    titile:"你好",
    content:"请在下方输入经度和纬度，然后点“查看位置”~",
    cancelText:"取消？"
  })

},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

 