const eventChannel = this.getOpenerEventChannel();
function on (name , funct) {
  eventChannel.on(name, funct)
}
function once({name, funct}) {
  eventChannel.once(name, funct)
}
function emit({res,name}) {
  if (res){
    res.eventChannel.emit(name);
  }
  else{
    eventChannel.emit(name);
     }
}
function event({success,event}){
    success: eventChannel.once('sendData'),
    event
}
module.exports = {
  event:  event
};