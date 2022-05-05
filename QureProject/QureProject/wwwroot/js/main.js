//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js

let switchMode = document.getElementById("switchMod");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/light-mode.css"){
        theme.href = "css/dark-mode.css";
	}else{
        theme.href = "css/light-mode.css";
	}
}

