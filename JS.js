
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const btnUP = document.getElementById("btnUP");
const btnUP2 = document.getElementById("btnUP2");
const reset = document.getElementById("reset");
const pick = document.getElementById("pick");

let game = false;
let pickscore = 5;
let btnscore1 = 0;
let btnscore2 = 0;

btnUP.addEventListener('click', function () {

    if (!game) {
        btnscore1 += 1;
        if (btnscore1 === pickscore) {
            playerOne.classList.add("has-text-success")
            playerTwo.classList.add("has-text-danger")
            btnUP.disabled = true;
            btnUP2.disabled = true;
            game = true;
        }
        playerOne.textContent = btnscore1;
    }
   
})

pick.addEventListener('change', function () {
    pickscore = parseInt(this.value);
})

btnUP2.addEventListener('click', function () {
    if (!game) {
        btnscore2 += 1;
        if (btnscore2 === pickscore) {
            playerTwo.classList.add("has-text-success")
            playerOne.classList.add("has-text-danger")
            btnUP.disabled = true;
            btnUP2.disabled = true;
            game = true;
        }
        playerTwo.textContent = btnscore2;
    }
})





reset.addEventListener("click", function () {
    btnscore1 = 0;
    btnscore2 = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOne.classList.remove("has-text-success" ,'has-text-danger')
    playerTwo.classList.remove("has-text-success" ,'has-text-danger')
    btnUP.disabled = false;
    btnUP2.disabled = false;
    game = false;
})