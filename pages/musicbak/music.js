// pages/music/music.js
// 
 const app = getApp()
 var index=0
 //为什么要为1，初始为0next要点两下才能去
Page({

 

  data: {
  

    index:0,

    songs:[

    {
      poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000qBP6c4Ybqop.jpg?max_age=2592000',
    name:'小翅膀',
    author: '声音玩具',
    //src: 'http://fs.w.kugou.com/201710041502/722e066d7c3b264054efce403908a871/G012/M07/1A/19/rIYBAFUPdLeAd9YFAHB_qZ6nqus006.mp3'
 src: 'http://ws.stream.qqmusic.qq.com/C400000iT3Zv14vvVH.m4a?vkey=20620206F205E6BC298CCD35C937730A84537ECA44D61B65FD60C5FFB8308C2E8BD3DFF38287202B369B42471B701991DFAF5C94854EF9F4&guid=7085978430&uin=0&fromtag=66'

  },
 {poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000EKT9J4D2BUV.jpg?max_age=2592000',
    name: '路口',
    author: '张悬',
    src: 'http://ws.stream.qqmusic.qq.com/C400000HGfbM3IvgGF.m4a?vkey=0447503FD04ADD0C6BA53371C59494A8B5469D3E271B58A62C5DD559A370AA9EDBE840127A7F7E7F1213BAE366ACC4937C7556C1E822C098&guid=7085978430&uin=0&fromtag=66'
},
{poster: 'http://imge.kugou.com/stdmusic/20151020/20151020104822907342.jpg',
    name: '失之城',
    author: '尧十三',
    src: 'http://ws.stream.qqmusic.qq.com/C4000045LX2L1aOivE.m4a?vkey=4B5DD8ED1C9C3627595BD4295C9D696124118DFC31ABFCB51EE36548A0652F3397F83A7C36CA4266E0B3BB03470766960C8FCBDEE26C0121&guid=7085978430&uin=0&fromtag=66'
}
  
  ]
},

  onReady: function () {
    //this.setData({
    //  song:songs[1]
    //})

this.audioCtx = wx.createAudioContext('myAudio')
         console.log(this.audioCtx)
  },

 bindPickerChange:function(e){
      console.log("bindPickerChange")    
      console.log(e.detail.value)  
      var num=parseInt(e.detail.value)
this.setData({
  index:num})
  console.log(index)

 // song = songs[index]
//this.audioCtx = wx.createAudioContext('myAudio')
console.log("改")
},

audioNext: function () { 
 // this.audioCtx.pause()
  console.log("audionext pause")
    
    index=index+1
    if (index>2) {index=0}   
      this.setData({
      index:index
})
    this.audioCtx.setSrc(this.data.songs[index].src)
    this.audioCtx.play()
    console.log("to play audioNext")
  },

  audioPlay: function () {
    this.audioCtx.play()
    console.log("audio play begin")
    console.log(this.audioCtx);
    console.log("audio play end")
  },

  audioPause: function () {
     console.log("audio pause begin")
    this.audioCtx.pause()
    console.log("audio pause end")
  },




    audioFirst: function () {
      //this.audioCtx.pause()
        console.log("audiofirst pause")
    index=0  
    this.setData({
   index:0
})
    this.audioCtx.setSrc(this.data.songs[0].src)
    this.audioCtx.play()
  },



  audioStart: function () {
    this.audioCtx.seek(0)
  },
funtimeupdate: function(u)
{   console.log(u.detail.currentTime);  
 console.log(u.detail.duration); },

funended: function()
{   console.log("audio end");
 }, 

funerror: function(u)
{   console.log(u.detail.errMsg);
 },

 funplay: function()
 {   console.log("audio play"); 
}, 

funpause: function()
{   console.log("audio pause");

 },


  onLoad: function (options) {
  
  },


  onShow: function () {
  
  },

  onHide: function () {
  
  },


  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  
  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }

})