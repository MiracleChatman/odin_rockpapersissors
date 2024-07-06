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
        computerScore++
        console.log("You lose! paper beats rock")
    } else if (humanInput == "rock" && computerChoice == "sissors") {
        humanScore++
        console.log("You win! rock beats sissors")
    }  else if (humanInput == "paper" && computerChoice == "sissors") {
        computerScore++
        console.log("You win! sissors beats paper")
    } else if (humanInput == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You win! paper beats rock")
    } else if (humanInput == "sissors" && computerChoice == "paper") {
        humanScore++
        console.log("You win! sissors beats paper")
    } else if (humanInput == "sissors" && computerChoice == "rock") {
        computerScore++
        console.log("You lose! rock beats sissors")
    } else if (humanInput == computerChoice ){
        console.log("It's a draw! you both chose the same thing")
    }
}


playRound(getHumanChoice(),getComputerChoice())