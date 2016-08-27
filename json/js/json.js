var af1 = function(){
  eval($("#ap1").text());
  // eval($("#ab1").text());
};

var request = new XMLHttpRequest();
request.open("GET", "get.php", true);
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        //do something... request.responseText
    }
};

