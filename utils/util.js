function getStorage({key,success}) {
  wx.getStorage({
      success,
      key})
}
function setStorage({dataSet, key}) {
  wx.setStorage({
    key,
    data: dataSet,
  });
}
function navigate({url, success, events}){
  wx.navigateTo({
    url,
    events,
    success
  })
}
module.exports = {
  getStorage: getStorage,
  setStorage: setStorage,
  navigate:  navigate
};
