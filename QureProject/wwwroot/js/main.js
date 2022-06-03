//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js

let switchMode = document.getElementById("cookies");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

    let value = "";
    let name = "theme" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
        }
    }

    if (value == "light") {
        theme.href = "/css/darkmode.css";
        value = "dark";
    } else {
        theme.href = "/css/lightmode.css";
        value = "light";
    }

    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "theme" + "=" + value + ";" + expires + ";path=/";
    
}

