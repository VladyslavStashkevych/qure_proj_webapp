let value = "";
let name = "text" + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for (let c of ca) {
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        value = c.substring(name.length, c.length);
    }
}

let tmp = value.split(' ')
let lines = []
let temp = ""
for (let l of tmp) {
    if (temp.length + l.length + 1 <= 15)
        temp += l + " "
    else {
        lines.push(temp)
        temp = l + " "
    }
}
lines.push(temp)

let prev = document.getElementById("prev")
let curr = document.getElementById("curr")
let next = document.getElementById("next")
curr.innerHTML = lines[0]
next.innerHTML = lines[1]
lines.shift()
lines.shift()

let readingSpeed = 0
async function outputUpdate(speed) {
    readingSpeed = (speed * 7) / 100
    let output = document.querySelector("#speed")
    output.value = speed;

    output.style.left = speed * 3.6 - 17 + 'px';
    if (output.value > 9) {
        output.style.left = speed * 3.6 - 25 + 'px';
    }
    if (output.value > 18) {
        output.style.left = speed * 3.6 - 26.5 + 'px';
    }
    if (output.value > 27) {
        output.style.left = speed * 3.6 - 28 + 'px';
    }
    if (output.value > 36) {
        output.style.left = speed * 3.6 - 29.5 + 'px';
    }
    if (output.value > 45) {
        output.style.left = speed * 3.6 - 31 + 'px';
    }
    if (output.value > 54) {
        output.style.left = speed * 3.6 - 32.5 + 'px';
    }
    if (output.value > 63) {
        output.style.left = speed * 3.6 - 34 + 'px';
    }
    if (output.value > 72) {
        output.style.left = speed * 3.6 - 35.5 + 'px';
    }
    if (output.value > 81) {
        output.style.left = speed * 3.6 - 37 + 'px';
    }
    if (output.value > 90) {
        output.style.left = speed * 3.6 - 38.5 + 'px';
    }
    if (output.value > 99) {
        output.style.left = speed * 3.6 - 47 + 'px';
    }
    await change()
}


async function change() {
    if (typeof (lines[0]) === "undefined") {
        if (next.innerHTML != "" && next.innerHTML != "undefined") {
            prev.innerHTML = curr.innerHTML
            curr.innerHTML = next.innerHTML
            next.innerHTML = ""
        }
        return;
    }
    while (typeof (lines[0]) != "undefined" && readingSpeed != 0) {
        prev.innerHTML = curr.innerHTML
        curr.innerHTML = next.innerHTML
        next.innerHTML = lines[0]
        await sleep(1000 / readingSpeed)
        lines.shift()
        await change()
    }
}
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}