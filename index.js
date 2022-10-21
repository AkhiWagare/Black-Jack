document.getElementById("new-game").setAttribute("style", "visibility: hidden;");

let player = {
    name: "Akhi",
    chips: 786
}

let firstCard // = randomCard()
let secondCard // = randomCard()
let cards // = [firstCard, secondCard]
let sum // = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : $" + player.chips

function randomCard() {
    let rn = Math.floor(Math.random() * 13 + 1)
    if (rn === 1)
        return 11
    else if (rn > 10)
        return 10
    else return rn
}

function startGame() {
    firstCard = randomCard()
    secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("start-game").setAttribute("style", "visibility: hidden;");
    document.getElementById("new-card").setAttribute("style", "visibility: ;");
    document.getElementById("new-game").setAttribute("style", "visibility: ;");
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        document.getElementById("message-el").setAttribute("style", "color: #F9D923;");
        message = "Do you want to draw a new card?"
        document.getElementById("start-game").setAttribute("style", "visibility: hidden;");
        document.getElementById("new-card").setAttribute("style", "visibility: ;");
        document.getElementById("new-game").setAttribute("style", "visibility: ;");
    } else if (sum === 21) {
        hasBlackJack = true;
        document.getElementById("message-el").setAttribute("style", "color: #00EAD3;"); // #36AE7C
        message = "WoHoo! You have a BlackJack!!!"
        document.getElementById("start-game").setAttribute("style", "visibility: hidden;");
        document.getElementById("new-card").setAttribute("style", "visibility: hidden;");
        document.getElementById("new-game").setAttribute("style", "visibility: ;");
    } else {
        isAlive = false;
        document.getElementById("message-el").setAttribute("style", "color: #EB5353;");
        message = "Sorry, you lost!!!"
        document.getElementById("start-game").setAttribute("style", "visibility: hidden;");
        document.getElementById("new-card").setAttribute("style", "visibility: hidden;");
        document.getElementById("new-game").setAttribute("style", "visibility: ;");
    }

    messageEl.textContent = message
}

function newCard() {
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function newGame() {
    location.reload()
}