function showEventType () {
    // alert(event.type);
    alert(this);
}
// var af1 = function(){
//   eval($("#ap2").text());
// };
var btn1 = document.getElementById("ab1");
btn1.onclick = function(){
    alert(this.id);
};
var af2 = function(){
  eval($("#ap3").text());
};
// var af3 = function(){
//   eval($("#ap4").text());
// };
var btn3 = document.getElementById("ab3");
var showId = function(){
    alert(this.id);
}
btn3.addEventListener("click",showId,false);
var af4 = function(){
  eval($("#ap5").text());
};
var btn5 = document.getElementById("ab5");
var showThis = function(){
    alert(this === window);
}
btn5.attachEvent("onclick",showId);