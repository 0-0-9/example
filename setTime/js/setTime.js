var start,stop,result;
var af1 = function(){
  // $(".aclock1").text("0");
  // start = Date.now();
  console.time("aclock1");
  eval($("#ap1").text());
  console.timeEnd("aclock1");
  // stop = Date.now();
  // result = stop - start;
  // $(".aclock1").text(result);
};
var af2 = function(){
  // $(".aclock2").text("0");
  // start = Date.now();
  console.time("aclock2");
  eval($("#ap2").text());
  console.timeEnd("aclock2");
  // stop = Date.now();
  // result = stop - start;
  // $(".aclock2").text(result);
};
var af3 = function(){
  eval($("#ap3").text());
};
var af4 = function(){
  eval($("#ap4").text());
};
var af5 = function(){
  eval($("#ap5").text());
};
var ac1,ac2;
var bf1 = function(){
  ac1 = setInterval("alert('Hey,girls!')",1000);
};
var bf2 = function(){
  clearInterval(ac1);
};
var bf3 = function(){
  ac2 = setInterval(function(){
    alert('Hey,girls!');
  },1000);
};
var bf4 = function(){
    clearInterval(ac2);
};
var bf5 = function(){
  eval($("#bp3").text());
};
var bf6 = function(){
  eval($("#bp4").text());
};