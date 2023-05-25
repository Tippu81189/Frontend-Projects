let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "️❌❌BOOM❌❌️";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerEl.textContent = "😁You Defused Bomb😁";
        clearInterval(intervalId);
    }
});