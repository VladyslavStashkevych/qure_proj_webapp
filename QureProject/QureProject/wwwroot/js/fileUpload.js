let input = document.getElementById("file-input")
let popup_accept = document.getElementById("popup__accept")
popup_accept.onclick = function () {
    write();
}
function write() {
    require("fs").writeFile("demo.txt", "Foo bar!");
}