const input = document.querySelector("input");
let showBtn = document.querySelector(".showBtn");
const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const status = document.querySelector(".status");

let RegExpWeak = /[a-z]/;
let RegExpMedium = /\d+/;
let RegExpStrong = /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let no = 0;

function trigger() {
    if (input.value !== "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (input.value.length <= 3 && input.value.match(RegExpWeak) || input.value.match(RegExpMedium) || input.value.match(RegExpStrong)) {
            no = 1;
        }

        if (input.value.length >= 6 && ((input.value.match(RegExpWeak) && input.value.match(RegExpMedium)) || (input.value.match(RegExpMedium) && input.value.match(RegExpStrong)) || (input.value.match(RegExpWeak) && input.value.match(RegExpStrong)))) {
            no = 2;
        }
        if (input.value.length >= 8 && input.value.match(RegExpWeak) && input.value.match(RegExpMedium) && input.value.match(RegExpStrong)) {
            no = 3;
        }
        if (no === 1) {
            weak.classList.add("active");
            status.style.display = "block";
            status.textContent = "Your password is too Weak";
            status.classList.add("weak");
        }
        if (no === 2) {
            weak.classList.add("active");
            medium.classList.add("active");
            status.textContent = "Your password is Medium";
            status.classList.add("weak");
        } else {
            medium.classList.remove("active");
            status.classList.remove("medium")
        }
        if (no === 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            status.textContent = "Your password is Strong";
            status.classList.add("strong");
        } else {
            strong.classList.remove("active");
            status.classList.remove("strong");
        }
    } else {
        indicator.style.display = "none";
        status.style.display = "none";
    }
}

function showPassword() {
    if (input.type === "password") {
        input.setAttribute('type', 'text');
        showBtn.classList.add('showBtn');
    } else {
        input.setAttribute('type', 'password');
    }
}