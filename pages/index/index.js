//index.js
//获取应用实例
const app = getApp()

import mock from './mock.js'

Page({
  data: {
    items: mock
  },

  onLoad: function () {
    this._doRefreshMasonry(this.data.items)
  },

  onReachBottom: function () {
    this._doAppendMasonry(this.data.items)
  },

  _doRefreshMasonry(items) {
    console.log(items)
    this.masonryListComponent = this.selectComponent('#masonry');
    let imgBox = this.selectComponent('.img-box');
    console.log(imgBox)
    // imgBox.intoClick();
    this.masonryListComponent.start(items).then(() => {
      console.log('refresh completed')
    })
  },

  _doAppendMasonry(items) {
    this.masonryListComponent = this.selectComponent('#masonry')
    // 获取接口数据后使用瀑布流组件append方法，当append完成后调用then，是否可触底价在的标志位可以在这里处理
    this.masonryListComponent.append(items).then(() => {
      console.log('refresh completed')
    })
  },
  intoClick(e){
    console.log(e.detail.name)
  }
 

})
