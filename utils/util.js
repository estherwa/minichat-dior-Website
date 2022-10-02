function getStorage({key,success}) {
  wx.getStorage({
      success,
      key})
}
function setStorage(e) {
  wx.setStorage({
    key: "idx",
    data: e.currentTarget.dataset.idx,
    success: function (res) {

    },
  });
}
module.exports = {
  getStorage: getStorage,
  setStorage: setStorage
};
