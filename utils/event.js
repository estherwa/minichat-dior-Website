

function on (name , funct) {
  const eventChannel = this.getOpenerEventChannel();
  eventChannel.on(name, funct)
}
function once({name,eventChannel, funct}) {
  
  eventChannel.once(name, funct)
}
function emit({res,name}) {

  
  if (res){
    res.eventChannel.emit(name);
  }
  else{
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit(name);
     }
}
module.exports = {
  on:on,
  once:once, 
  emit:emit
};