var body = document.body;

function changeColor(e){
    var ele = document.querySelector("#"+e);
    ele.style.color = "red";
    ele.style.fontSize = "200%";
}
changeColor("aDiv");