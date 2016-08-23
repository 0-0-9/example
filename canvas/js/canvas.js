function drawMyCanvas(){
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
    };
}

var af1 = function(){
  eval($("#ap2").text());
};
var af2 = function(){
  eval($("#ap3").text());
};
var af3 = function(){
  eval($("#ap4").text());
};
window.onload = function(){
    drawMyCanvas();
};