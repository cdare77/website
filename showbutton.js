function showbutton(divId, button, lang) {
    var x = document.getElementById(divId);
    var but = document.getElementById(button);
    if (x.style.display == "none") {
        x.style.display = "block";
        but.innerHTML = "Hide " + lang;
    }
    else {
        x.style.display = "none";
        but.innerHTML = "Show " + lang;
    }
}
