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

var searchBtn = document.getElementById("searchBtn");
var searchFn = function() {
    var keywordVal = document.getElementById("keyword").value;
    var request = new XMLHttpRequest();
    request.open("GET", "server.php?number=" + keywordVal);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var response = JSON.parse(request.responseText);
                if (response.success) {
                    document.getElementById("createResult").innerHTML = response.msg;
                } else {
                    document.getElementById("createResult").innerHTML = "error: " + response.msg;
                }
                // document.getElementById("searchResult").innerHTML = request.responseText;
            } else {
                alert("出错！错误代码" + request.status);
            }
        }
    };
};

var saveBtn = document.getElementById("saveBtn");
var saveFn = function() {
    var request = new XMLHttpRequest();
    request.open("POST", "server.php");
    var data = "name=" + document.getElementById("staffName").value +
        "&number=" + document.getElementById("staffNum").value +
        "&sex=" + document.getElementById("staffSex").value +
        "&job=" + document.getElementById("staffJob").value;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // document.getElementById("createResult").innerHTML = request.responseText;
                var response = JSON.parse(request.responseText);
                if (response.success) {
                    document.getElementById("createResult").innerHTML = response.msg;
                } else {
                    document.getElementById("createResult").innerHTML = "error: " + response.msg;
                }
            } else {
                alert("出错！错误代码" + request.status);
            }
        }
    };
}
window.onload = function() {
    EventUtil.addHandler(searchBtn, "click", searchFn);
    EventUtil.addHandler(saveBtn, "click", saveFn);
};