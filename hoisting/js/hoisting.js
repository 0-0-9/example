var af1 = function(){
  eval($("#ap1").text());
  eval($("#ab1").text());
};
var af2 = function(){
  eval($("#ap1").text());
  eval($("#ab2").text());
};
var af3 = function(){
  eval($("#ap2").text());
  eval($("#ab3").text());
};
var af4 = function(){
  eval($("#ap2").text());
  eval($("#ab4").text());
};
var bf1 = function(){
  eval($("#bp1").text());
  eval($("#bb1").text());
};
var bf2 = function(){
  eval($("#bp2").text());
  eval($("#bb2").text());
};
var cf1 = function(){
  eval($("#cp1").text());
};
var cf2 = function(){
  eval($("#cp2").text());
  eval($("#cb2").text());
};
var df1 = function(){
  eval($("#dp1").text());
  //eval($("#db1").text());
};
var df2 = function(){
  eval($("#dp2").text());
};
var x = function(){
    foo();
    alert(n);
    function foo(){
        alert("foo");
    }
    var n = 1;
}