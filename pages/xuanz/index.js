Page({
  data: {
    //模拟假数据
    seats: [
      { num: 1, userInfo: { uid: 20190101, name: '阎阎' } },
      { num: 2, userInfo: { uid: 20190101, name: '阎阎' } },
      { num: 3, userInfo: { uid: 20190102, name: '花花' } },
      { num: 4, userInfo:null},
      { num: 5, userInfo: { uid: 20190103, name: '仙球' } },
      { num: 6, userInfo: { uid: 20190104, name: '亮亮' } },
      { num: 7, userInfo: null },
      { num: 8, userInfo: null },
      { num: 9, userInfo: null },
      { num: 10, userInfo: null },
      { num: 11, userInfo: null },
      { num: 12, userInfo: { uid: 20190102, name: '花花' } },
      { num: 13, userInfo: null },
      { num: 14, userInfo: null },
      { num: 15, userInfo: null },
      { num: 16, userInfo: null }
    ],
    myselectSite:[]
  },

  //重组数据-分为四个一组
  reSetData(dataList,num) {
    let arr = [];
    let len = dataList.length;
    for (let i = 0; i < len; i += num) {
      arr.push(dataList.slice(i, i + num));
    }
    return arr;
  },

  //移除选择的座位
  remove (arr,val) {
    var index = arr.indexOf(val);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },

  //选择座位
  selctedSite(e){
    let { myselectSite } = this.data;
    const param = e.target.dataset;
    const { num, used } = param;
    if (!used) { return  false};
    if (myselectSite.indexOf(num)===-1){
      myselectSite.push(num)
    }else{
      this.remove(myselectSite,num)
    }
    this.setData({ myselectSite })
  },

  onLoad: function (options) {
    let { seats } = this.data;
    let temp = this.reSetData(seats,4)
    this.setData({ seats: temp })
  }
})