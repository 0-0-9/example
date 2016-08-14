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
if (btn3.addEventListener) {
    btn3.addEventListener("click",showId,false);
}

var af4 = function(){
  eval($("#ap5").text());
};
var btn5 = document.getElementById("ab5");
var showThis = function(){
    alert(this === window);
}
if (btn5.attachEvent) {
    btn5.attachEvent("onclick",showThis);
};

  eval($("#ap7").text());
var EventUtil = {
    addHandler: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, handler);
        } else {
            ele["on" + type] = handler;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent("on" + type, handler);
        } else {
            ele["on" + type] = null;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
