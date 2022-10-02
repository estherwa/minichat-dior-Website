function getStorage(that) {
  console.log("hello");

  wx.getStorage({
    key: "idx",
    success: function (res) {
      that.setData({
      })
      that.setData({
         product: res.data,
        })
    },
  })
}

function setStorage(e) {
  wx.setStorage({
    key: "idx",
    data: e.currentTarget.dataset.idx,
    success: function (res) {
      console.log(res);
    },
  });
}



module.exports = {
  getStorage: getStorage,
  setStorage: setStorage

};
