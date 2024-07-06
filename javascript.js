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

console.log(getComputerChoice())