// Validasi 
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    const d = new Date();

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false
    }
    
    setSenderUi(name,birthDate,gender,messages,d)
    replaceName(name)
    
    return false;
};

function replaceName (nama) {
    document.getElementById("user-greeting").innerHTML = nama;
}

function setSenderUi(name,birthDate,gender,messages,d) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    document.getElementById("sender-current-time").innerHTML = d;
}

// Banner auto slide
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex -1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000)

