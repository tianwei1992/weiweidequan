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
 //src: 'http://ws.stream.qqmusic.qq.com/C400000iT3Zv14vvVH.m4a?vkey=20620206F205E6BC298CCD35C937730A84537ECA44D61B65FD60C5FFB8308C2E8BD3DFF38287202B369B42471B701991DFAF5C94854EF9F4&guid=7085978430&uin=0&fromtag=66'
//src:'http://data.5sing.kgimg.com/G109/M0A/06/11/TZQEAFnSFYaAehB7ADHGgFVjXt8381.mp3'
  src:'http://fs.w.kugou.com/201710141914/cd35b6c3282ac620bd280ce0424460ab/G085/M08/02/13/NZQEAFhzPAmAeXIlAF5KcHDxV5U016.mp3'
  },
 {poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000EKT9J4D2BUV.jpg?max_age=2592000',
    name: '路口',
    author: '张悬',
    src: 'http://fs.w.kugou.com/201710141916/5abc1a8fd4110e1b81cd924836da774d/G009/M09/08/0B/SQ0DAFT_D5qAB2pqAE4bJXfl3hg759.mp3'
},
{poster: 'http://imge.kugou.com/stdmusic/20151020/20151020104822907342.jpg',
    name: '失之城',
    author: '尧十三',
    src: 'http://fs.w.kugou.com/201710141933/8fae03e801e75399ead7013d9af67aab/G044/M06/10/14/zIYBAFZPbI2AGUgdAF95mYIF_jM675.mp3'
}
  
  ]
},

  onReady: function () {
     this.setData({
      index:0,
      poster:this.data.songs[0].poster,
      name:this.data.songs[0].name,
      src:this.data.songs[0].src,
      author:this.data.songs[0].author
})

this.audioCtx = wx.createAudioContext('myAudio')
         console.log(this.audioCtx)
  },

 bindPickerChange:function(e){
      console.log("bindPickerChange")    
      console.log(e.detail.value)  
      var num=parseInt(e.detail.value)
      index=num;
//this.setData({
  //index:index})
//this.audioCtx.setSrc(this.data.songs[index].src)
   this.setData({
      index:index,
      poster:this.data.songs[index].poster,
      src:this.data.songs[index].src,
      name:this.data.songs[index].name,
      author:this.data.songs[index].author
    })
 wx.playBackgroundAudio({
     //播放地址
          dataUrl: this.data.songs[index].src,
          //title 音乐名字
          title: this.data.songs[index].name,
          //图片地址
          coverImgUrl: this.data.songs[index].poster
      })

  console.log(index)

 // song = songs[index]
//this.audioCtx = wx.createAudioContext('myAudio')
//
console.log("改")
},

audioNext: function () { 
 // this.audioCtx.pause()

  console.log("audionext pause")
    index=index+1
    if (index>2) {index=0}   
      this.setData({
      index:index,
      poster:this.data.songs[index].poster,
      src:this.data.songs[index].src,
      name:this.data.songs[index].name,
      author:this.data.songs[index].author
    })
    //this.audioCtx.setSrc(this.data.songs[index].src)
    wx.playBackgroundAudio({
     //播放地址
          dataUrl: this.data.songs[index].src,
          //title 音乐名字
          title: this.data.songs[index].name,
          //图片地址
          coverImgUrl: this.data.songs[index].poster
      })

    console.log("to play audioNext")
  },

  audioPlay: function () {
    wx.playBackgroundAudio({
     //播放地址
          dataUrl: this.data.songs[index].src,
          //title 音乐名字
          title: this.data.songs[index].name,
          //图片地址
          coverImgUrl: this.data.songs[index].poster
      })

    console.log("audio play begin")
    console.log(this.audioCtx);
    console.log("audio play end")
  },

  audioPause: function () {
     console.log("audio pause begin")
    wx.pauseBackgroundAudio()
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
    wx.playBackgroundAudio({
     //播放地址
          dataUrl: this.data.songs[0].src,
          //title 音乐名字
          title: this.data.songs[0].name,
          //图片地址
          coverImgUrl: this.data.songs[0].poster
      })

  },



  audioStart: function () {
   wx.seekBackgroundAudio({
    position: 0
})
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