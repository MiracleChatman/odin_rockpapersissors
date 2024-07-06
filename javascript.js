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

console.log(getHumanChoice())