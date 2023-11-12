function saklarToggle(idToggle, idlampu) {
    let lampu = document.getElementById(idlampu);
    let toggle = document.getElementById(idToggle);

    if (toggle.checked) {
        lampu.src = "assets/images/on.gif";
    }
    else {
        lampu.src = "assets/images/off.gif";
    }

}