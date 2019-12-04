"use strict";
let nicknameList;
fetch("sample.txt").then(convertData).then(processData);


function convertData(rawData) { 
    return rawData.text();
}
function processData(data) {
    nicknameList = data.split(/, | \r\n/)
    console.log(nicknameList);
}


document.getElementById("random").addEventListener("click", rngg);
document.getElementById("all").addEventListener("click", all);

//let namechoice = ["The Trigger", "The Tracer", "The Drifter", "The Snake", "The Beast", "The Bully"];

function rngg() {
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    let i = Math.floor(Math.random() * 5);
    document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[i] + "\" "  + ln + "</p>";
    
}
//Prototype functions for rngg
function rng() {
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    let nameroll = Math.floor((Math.random() * 6) + 1);
    if (nameroll == 1) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[0] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 2) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[1] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 3) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[2] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 4) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[3] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 5) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[4] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 6) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[5] + "\" "  + ln + "</p>";
    }
}

function all() {
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    for (let i = 0; i < 6; i++) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + nicknameList[i] + "\" "  + ln + "</p>";
    }
}