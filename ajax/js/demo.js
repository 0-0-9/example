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
    removeHandler: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent("on" + type, handler);
        } else {
            ele["on" + type] = null;
        }
    }
};

var searchFn = function() {
    var keywordVal = document.getElementById("keyword").value;
    var request = new XMLHttpRequest();
    request.open("GET", "server.php?number=" + keywordVal);
    request.send();
    // alert(keywordVal);
};

window.onload = function() {
    var searchBtn = document.getElementById("searchBtn");
    EventUtil.addHandler(searchBtn, "click", searchFn);
};