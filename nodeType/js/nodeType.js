
window.onload = function(){

};
var af1 = function(){
  eval($("#ap1").text());
};
var af2 = function(){
  eval($("#ap2").text());
};
var af3 = function(){
  eval($("#ap3").text());
};
var af4 = function(){
  eval($("#ap4").text());
};
var bf1 = function(){
    eval($("#bp2").text());
    eval($("#bb1").text());
};
var bf2 = function(){
    eval($("#bp2").text());
    eval($("#bb2").text());
};
var bf3 = function(){
    eval($("#bp2").text());
    eval($("#bb3").text());
};
var bf4 = function(){
    eval($("#bp2").text());
    eval($("#bb4").text());
};
var bf5 = function(){
    eval($("#bp2").text());
    eval($("#bb5").text());
};
var bf6 = function(){
    eval($("#bp2").text());
    eval($("#bb6").text());
};
var div = document.getElementById("docDivId");
function changeToDocDivId() {
    if (document.getElementById("docDivId2")) {
        // var div = document.getElementById("docDivId2");
        div.id = "docDivId";
        div.className = "docDiv";
        div.title = "this is title";
        div.lang = "en";
        div.dir = "ltr";
    }
}
function changeToDocDivId2() {
    if (document.getElementById("docDivId")) {
        // var div = document.getElementById("docDivId");
        div.id = "docDivId2";
        div.className = "docDiv2";
        div.title = "this is title2";
        div.lang = "fr";
        div.dir = "rtl";
    }
}
var cf1 = function(){
    changeToDocDivId();
  // eval($("#cp2").text());
  eval($("#cb1").text());
};
var cf2 = function(){
  // eval($("#cp2").text());
  changeToDocDivId();
  eval($("#cb2").text());
};
var cf3 = function(){
    changeToDocDivId();
  // eval($("#cp2").text());
  eval($("#cb3").text());
};
var cf4 = function(){
    changeToDocDivId();
  // eval($("#cp2").text());
  eval($("#cb4").text());
};
var cf5 = function(){
    changeToDocDivId();
  // eval($("#cp2").text());
  eval($("#cb5").text());
};

var cf6 = function(){
    changeToDocDivId2();
  // eval($("#cp3").text());
  eval($("#cb6").text());
};
var cf7 = function(){
    changeToDocDivId2();
  // eval($("#cp3").text());
  eval($("#cb7").text());
};
var cf8 = function(){
    changeToDocDivId2();
  // eval($("#cp3").text());
  eval($("#cb8").text());
};
var cf9 = function(){
    changeToDocDivId2();
  // eval($("#cp3").text());
  eval($("#cb9").text());
};
var cf10 = function(){
    changeToDocDivId2();
  // eval($("#cp3").text());
  eval($("#cb10").text());
};
