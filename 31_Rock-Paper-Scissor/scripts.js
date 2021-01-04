var myResultScore = 0;
var comResultScore = 0;
const myScore = document.querySelector('.myScore');
const comScore = document.querySelector('.comScore');
const message = document.querySelector('.message');
var myBlock = document.getElementById("myBlock");
var comBlock = document.getElementById("comBlock");

function myChoice(id) {
    if (id === 'sc') {
        myBlock.innerHTML = '<i class="fas fa-hand-scissors" style="font-size: 200px;"></i>';
    } else if (id === 'pp') {
        myBlock.innerHTML = '<i class="fas fa-hand-paper" style="font-size: 200px;"></i>';
    } else {
        myBlock.innerHTML = '<i class="fas fa-hand-rock" style="font-size: 200px;"></i>';
    }
    const comSelection = computerChoice();
    calcScore(id, comSelection);
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function computerChoice() {
    var random = randomNumber(1, 3);
    var comSelect = '';
    if (random === 1) {
        comBlock.innerHTML = '<i class="fas fa-hand-scissors" style="font-size: 200px;"></i>';
        comSelect = 'sc';
    } else if (random === 2) {
        comBlock.innerHTML = '<i class="fas fa-hand-paper" style="font-size: 200px;"></i>';
        comSelect = 'pp';
    } else {
        comBlock.innerHTML = '<i class="fas fa-hand-rock" style="font-size: 200px;"></i>';
        comSelect = 'rc';
    }
    return comSelect;
}

function calcScore(id, comSelection) {

    if (id === 'sc') {
        if (comSelection === 'sc') {
            message.innerHTML = 'Game is tie.';
        } else if (comSelection === 'pp') {
            message.innerHTML = 'You win.';
            myResultScore++;
            myScore.textContent = myResultScore;
        } else {
            message.innerHTML = 'You lost.';
            comResultScore++;
            comScore.textContent = comResultScore;
        }
    } else if (id === 'pp') {
        if (comSelection === 'sc') {
            message.innerHTML = 'You lost.';
            comResultScore++;
            comScore.textContent = comResultScore;
        } else if (comSelection === 'pp') {
            message.innerHTML = 'Game is tie.';
        } else {
            message.innerHTML = 'You win.';
            myResultScore++;
            myScore.textContent = myResultScore;
        }
    } else {
        if (comSelection === 'sc') {
            message.innerHTML = 'You win.';
            myResultScore++;
            myScore.textContent = myResultScore;
        } else if (comSelection === 'pp') {
            message.innerHTML = 'You lost.';
            comResultScore++;
            comScore.textContent = comResultScore;
        } else {
            message.innerHTML = 'Game is tie.';
        }
    }
}

function resetGame() {
    myResultScore = 0;
    comResultScore = 0;
    comScore.textContent = comResultScore;
    myScore.textContent = myResultScore;
    message.innerHTML = 'Are you ready?';
    myBlock.innerHTML = '';
    comBlock.innerHTML = ' ';
}