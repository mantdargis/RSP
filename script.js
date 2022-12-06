const btns = document.querySelectorAll("img");
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score");
const winnerSpan = document.querySelector(".winner")
let computerPts = 0
let playerPts = 0
let round = 1;



btns.forEach((button) =>{
  button.addEventListener('click', () => {
    const playerInput = button.id
    const computerInput = computerPlay()

    let winner = playRound(playerInput, computerInput)
    console.log(`winner is ${winner}`)
    if (winner === "computer") {
      computerScore.textContent = computerPts
    } else if (winner === "player") {
      playerScore.textContent = playerPts
    } else if (winner === "draw"){
      winnerSpan.textContent = "Draw"
      draw()
    }

    if(computerPts >= 5){
      winnerSpan.textContent = "Computer"
      reset()
    } else if (playerPts >= 5) {
      winnerSpan.textContent = "Player"
      reset()
    }

  })
})

let playRound = (pChoice, cChoice) => {
  console.log(`Round ${round}: Player chose ${pChoice}, Computer chose ${cChoice} `)
  if (pChoice === cChoice) {
    round++
    return 'draw'
  } else if (pChoice === 'rock') {
    if (cChoice === 'paper') {
      round++
      computerPts++
      console.log("You lose! Rock loses to Paper!")
      return "computer"
    } else {
      round++
      playerPts++
      playerScore.textConent = playerPts
      console.log("You win! Rock beats Scissors!")
      return "player"
    }
  } else if (pChoice === 'paper') {
    if (cChoice === 'scissors') {
      round++
      computerPts++
      console.log("You lose! Paper loses to Scissors!")
      return "computer"
    } else {
      round++
      playerPts++
      playerScore.textConent = playerPts
      console.log("You win! Paper beats Rock!")
      return "player"
    }
  } else if (pChoice === 'scissors') {
    if (cChoice === 'rock') {
      round++
      computerPts++
      console.log("You lose! Scissors loses to Rock!")
      return "computer"
    } else {
      round++
      playerPts++
      playerScore.textConent = playerPts
      console.log("You win! Scissors beats Paper!")
      return "player"
    }
  }
}

let computerPlay = () => {
  let num = Math.ceil(Math.random() * 3);
  let computerChoice = undefined;

  if (num === 1) {
    computerChoice = "rock"
  } else if (num === 2) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }
  return computerChoice
}

function reset(){
  setTimeout(() => {
    winnerSpan.textContent = ""
    playerScore.textContent = 0
    computerScore.textContent = 0
    computerPts = 0
    playerPts = 0
    console.log(`Player points ${playerPts}, pc ${computerPts}. ${playerScore.textContent} ${computerScore.textContent}`)
  }, "2000")
}

function draw(){
  setTimeout(() => {
    winnerSpan.textContent = ""
  }, "500")
}
