//& Seçiciler
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle = document.querySelector('.selection')

const messagePar = document.querySelector('.message')

//&Score
const scoreCardSection = document.querySelector('.score-card')
const yourScoreSpan = document.getElementById('your-score')
const pcScoreSpan = document.getElementById('pc-score')
const domTopScore = document.getElementById('top-score')

//& Değişkenler

let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement('img');
const pcSelectImg = document.createElement('img');

//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//& Modal

const modalCardSection = document.querySelector('.modal-card');
const finalMessagePar = document.getElementById('final-message');
const playAgainButton = document.getElementById('play-again');


// console.log(selectionArticle)


//& Event listeners

selectionArticle.addEventListener('click', (e) => {
    // console.log(e.target.id)
    userSelection = e.target.id
    // console.log(userSelection)

    if (userSelection && !(pcScoreSpan.textContent === '10' || yourScoreSpan.textContent === '10')) {
        userSelectImg.src = `./assets/${userSelection}.png`;
        userSelectImg.id = `you`;
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }


})

playAgainButton.addEventListener('click', () => {
    window.location.reload()
})

//& Functions

const createPcSelection = () => {
    pcArr = ['rock', 'paper', 'scissor', 'rock', 'paper', 'scissor'];
    pcRandom = pcArr[Math.trunc(Math.random() * 6)]
    // pcRandom = 'scissor'
    // console.log(pcRandom)
    pcSelectImg.src = `./assets/${pcRandom}.png`;
    pcSelectImg.id = `pcs`;
    pcChoiceDiv.appendChild(pcSelectImg)


    calculateResult()

}

const calculateResult = () => {
    // console.log(userSelection)
    // console.log(pcRandom)


    if (userSelection === pcRandom) {
        draw()
    } else {
        if (userSelection === 'rock') {
            pcRandom === 'paper' ? youLost(userSelection) : youWin(pcRandom)
        } else if (userSelection === 'paper') {
            pcRandom === 'scissor' ? youLost(userSelection) : youWin(pcRandom)
        } else if (userSelection === 'scissor') {
            pcRandom === 'rock' ? youLost(userSelection) : youWin(pcRandom)
        }
    }
    if (pcScoreSpan.textContent === '10' || yourScoreSpan.textContent === '10') {
        openModal()
    }


}


const draw = () => {
    messagePar.textContent = "it's a draw";
    messagePar.style.backgroundColor = YELLOW;
    scoreCardSection.style.color = YELLOW;
}

const youLost = (userSelection) => {
    // console.log(userSelection)
    messagePar.textContent = "You Lost!☹️";
    messagePar.style.backgroundColor = RED;
    scoreCardSection.style.color = RED;
    pcScoreSpan.textContent++
    // console.log(document.getElementById('you').getAttribute('src')) // attribute kontrol
    document.getElementById('you').setAttribute('src', `./assets/${userSelection}l.png`)
}

const youWin = (pcRandom) => {
    messagePar.textContent = "You Win😁";
    messagePar.style.backgroundColor = GREEN;
    scoreCardSection.style.color = GREEN;
    yourScoreSpan.textContent++
    document.getElementById('pcs').setAttribute('src', `./assets/${pcRandom}l.png`)
}


const openModal = () => {
    modalCardSection.classList.add("show")
    if (yourScoreSpan.textContent === '10') {
        finalMessagePar.textContent = '🎉You Win🎈'
        playAgainButton.style.color = GREEN
        document.querySelector('.modal').style.backgroundColor = GREEN
        updateTopScore()

    }
}


//! Local storage kullanımı


//  localStorage.setItem('highScore', 10 )
// localStorage.setItem('Hello', 'dünya' )

// let x = localStorage.getItem('highScore')

// console.log( typeof x)

// localStorage.removeItem('Hello')



//& update top Score

// ilk başlangıçta localstorage de tutulan skoru yazdır.

const storedScore = localStorage.getItem("highScore")
const topScore = storedScore ? `10 : ${storedScore}` : "0 : 0"

// console.log(topScore)

//ilk açılışta high score var ise  yaz yok ise 0 :0 yaz
domTopScore.textContent = topScore

const updateTopScore = () => {

    // Eğer highscore yoksa veya oyun sonunda update edilecekse
    if (!storedScore || storedScore > +pcScoreSpan.textContent) {
        localStorage.setItem("highScore", pcScoreSpan.textContent)
    }
}


//& Local storage deki verinin kullanıcı onayıyla silinmesi


domTopScore.addEventListener('dblclick', () => {

    if (domTopScore.textContent != "0 : 0") {
        if (confirm("Are you sure you want to reset the Top Score?")) {
            localStorage.removeItem("highScore");
            domTopScore.textContent = "0 : 0"
        }

    }
})































/* let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')


rock.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
})
paper.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/paper.png"/>`
})
scissor.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png"/>`
})
 */
