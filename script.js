const lampuOn = "assets/images/on.gif";
const lampuOff = "assets/images/off.gif";

function saklarToggle(idToggle, idlampu) {
    let lampu = document.getElementById(idlampu);
    let toggle = document.getElementById(idToggle);
    onOffLampu(idlampu,toggle.checked);
}

function checkboxClick(checkBoxId, ruangan){
    var lampuRuangTamu = document.getElementsByClassName(ruangan);
    let checkBox = document.getElementById(checkBoxId);
    for(var i = 0; i < lampuRuangTamu.length; i++) {
        onOffLampu(lampuRuangTamu[i].id,checkBox.checked);
    }
}

function onOffLampu(idlampu, condition){
    let lampu = document.getElementById(idlampu);
    if (condition) {
        lampu.src = lampuOn;
    }
    else {
        lampu.src = lampuOff;
    }
}