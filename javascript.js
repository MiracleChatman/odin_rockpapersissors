function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100)
    if (randomNumber <=33){
        return "rock"
    } else if (randomNumber <=66 && randomNumber > 33){
        return "paper"
    } else {
        return "sissors"
    }
}

function getHumanChoice() {
    return prompt("rock paper or sissors?")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    let humanInput = humanChoice.toLowerCase()
    if (humanInput == "rock" && computerChoice == "paper") {
        let roundWinner = "compuer"
        console.log("You lose! paper beats rock")
    } else if (humanInput == "rock" && computerChoice == "sissors") {
        let roundWinner = "human"
        console.log("You win! rock beats sissors")
    }  else if (humanInput == "paper" && computerChoice == "sissors") {
        let roundWinner = "computer"
        console.log("You win! sissors beats paper")
    } else if (humanInput == "paper" && computerChoice == "rock") {
        let roundWinner = "human"
        console.log("You win! paper beats rock")
    } else if (humanInput == "sissors" && computerChoice == "paper") {
        let roundWinner = "human"
        console.log("You win! sissors beats paper")
    } else if (humanInput == "sissors" && computerChoice == "rock") {
        let roundWinner = "computer"
        console.log("You lose! rock beats sissors")
    } else if (humanInput == computerChoice ){
        let roundWinner = "draw"
        console.log("It's a draw! you both chose the same thing")
    }

}

playRound(getHumanChoice(),getComputerChoice())