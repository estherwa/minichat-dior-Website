function getStorage({key,success}) {
  wx.getStorage({
      success,
      key})
}
function setStorage({dataSet, key,success}) {
  wx.setStorage({
    key,
    data: dataSet,
  });
}
module.exports = {
  getStorage: getStorage,
  setStorage: setStorage
};
