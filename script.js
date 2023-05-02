document.addEventListener("keydown", start);

function start() {
    var randomNumber1 = generateNumber();
    var randomNumber2 = generateNumber();
    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
    if (randomNumber1 > randomNumber2) {
        query.innerHTML = "😃 Jogador 1 Venceu!";
    } else if (randomNumber2 > randomNumber1) {
        query.innerHTML = "Jogador 2 Venceu! 😃";
    } else{
        query.innerText = "Empate!😐";
    }
    
}
var query = document.querySelector("h1");


function generateNumber() {
    var conta = Math.floor(Math.random()*6 + 1);
    return conta;
}