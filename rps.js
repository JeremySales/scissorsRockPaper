let playerScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function gameOver() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore ++

            if (playerScore == 1) {
                result += "<br>Nice! Got a point on the board" 
            }
            if (playerScore == 2) {
                result += "<br>Player up two! Nice!" 
            }            
            if (playerScore == 3) {
                result += "<br>Three points for Player! Only two more to go!" 
            }
            if (playerScore == 4) {
                result += "<br>Four points! Game point! Good luck player!" 
            }
            if (playerScore == 5) {
                result += "<br>WINNER: YOU!!!" 
                gameOver()
            }


        } else if (playerSelection == computerSelection) {
            result = ('I kept trying to think of a good pun for a tie, but came up with Tae bo')
        } else {
            cpuScore ++
            if (cpuScore == 1) {
                result += "<br>CPU on the board!"
            }
            if (cpuScore == 2) {
                result += "<br>CPU is up two! Still anyone's game!"
            }
            if (cpuScore == 3) {
                result += "<br>Uh oh, only two more points for the CPU!"
            }
            if (cpuScore == 4) {
                result += "<br>Game point, CPU!"
            }
            if (cpuScore == 5) {
                result += "<br>The machines are beginning to rise, CPU WINS!"
                gameOver()
            }

        }
        document.getElementById('result').innerHTML = result
        PlayerScoreP.textContent = `Player: ${playerScore}`
        cpuScoreP.textContent = `CPU: ${cpuScore}`

        return
}

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//Interface

const scoreInfo = document.getElementById('scoreInfo')
const PlayerScoreP = document.getElementById('playerScore')
const cpuScoreP = document.getElementById('cpuScore')