const rock = document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

const rock2 = document.querySelector('#rock2');
const paper2 = document.querySelector('#paper2');
const scissors2 = document.querySelector('#scissors2')

function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    if (number ==1) {
        value = "Rock";
        rock2.classList.add("played");
    }
    else if (number ==2) {
        value = "Paper";
        paper2.classList.add("played");
    }
    else {
        value = "Scissors";
        scissors2.classList.add("played");
    }
    return value;
}
function playRound(playerSelection, computerSelection = '')
{
    computerSelection=getComputerChoice();
    let winner;
    if (playerSelection.toUpperCase()=="Rock".toUpperCase() )
    {
        if(computerSelection=="Scissors")
            winner="You win. Rock beats Scissors";
        else if(computerSelection=="Paper")
            winner = "You loose. Paper beats Rock";
        else winner = "match Equal";
    }
    if (playerSelection.toUpperCase()=="Paper".toUpperCase() )
    {
        if(computerSelection=="Scissors")
            winner="You loose. Scissors beats Paper";
        else if(computerSelection=="Rock")
            winner="You win. Paper beats Rock";
        else winner = "match Equal";   
    }
    if (playerSelection.toUpperCase()=="Scissors".toUpperCase())
    {
        if(computerSelection=="Rock")
            winner = "You loose. Rock beats Scissors";
        else if(computerSelection=="Paper")
            winner = "You win. Scissors beats Paper";
        else winner = "match Equal" 

    }
    return winner; 
}
function finalWinner(theWinner=''){
    const winnerMessage = document.querySelector('.winner-message');
    const anotherGame = document.querySelector('.another-game');

    if(theWinner=="computer"){
        winnerMessage.innerText = "Sorry, You Lost!!!"
    }
    game.style.display ='none';
    finalOutcome.style.display = "flex";
    finalOutcome.style.flexDirection = "column";
    finalOutcome.style.justifyContent = "center";
    finalOutcome.style.alignItems="center";
                    
    anotherGame.addEventListener('click', ()=> location.reload());

}
        const playerSpan = document.querySelector('.playerspan');
        const computerSpan = document.querySelector('.computerspan');
         let playerMarks=0, computerMarks=0;
         let resultString;
        const outcome = document.querySelector('.outcome');

        const finalOutcome = document.querySelector('.final-outcome');
        const game = document.querySelector('#game');

        rock.addEventListener('click', () => {
            const oneGame=document.createElement('p');
            oneGame.textContent= playRound("rock");
            // oneGame.classList.add("oneGame");
            outcome.textContent = oneGame.textContent;
            // console.log(playerSpan);
            resultString = oneGame.textContent;
            rock.classList.add('played')
            if(resultString[4]==='w')
            {
                
                ++playerMarks;
                if(playerMarks<6)
                // ++playerSpan.textContent;   
                playerSpan.textContent=playerMarks;
                if(playerMarks===5) {
                    // ++playerSpan.textContent;
                    // if(confirm("Congratulations: You are the winner, play again?")) 
                    // location.reload();
                    // finalWinner();
                    setTimeout(finalWinner, 2000)
                }
            }
            else if (resultString[4]==='l')
            {
                ++computerMarks;
                if(computerMarks<6)
                // ++computerSpan.textContent;
                computerSpan.textContent = computerMarks;
                if(computerMarks===5)
                    {
                        // ++computerSpan.textContent;
                        // if(confirm("Sorry, You lost, play again?")) 
                        // location.reload();
                        // finalWinner('computer');
                        setTimeout(finalWinner, 2000, 'computer');
                    }
            }
        });

        paper.addEventListener('click', () => {
            const oneGame=document.createElement('p');
            oneGame.textContent= playRound("paper");
            outcome.textContent = oneGame.textContent;
            resultString = oneGame.textContent;
            paper.classList.add('played')
            if(resultString[4]==='w')
            {
                ++playerMarks;
                if(playerMarks<6)
                // ++playerSpan.textContent;
                playerSpan.textContent=playerMarks;
                // computerSpan.appendChild(computerPoints);   
                if(playerMarks===5) {
                    // ++playerSpan.textContent;
                    // if(confirm("Congratulations: You are the winner, play again?")) 
                    // location.reload();
                    // finalWinner();
                    setTimeout(finalWinner, 2000)
                }
            }
            else if (resultString[4]==='l')
            {
                ++computerMarks;
                if(computerMarks<6)
                // ++computerSpan.textContent; 
                computerSpan.textContent = computerMarks;
                if(computerMarks===5)
                    {
                        // ++computerSpan.textContent;
                        // if(confirm("Sorry, You lost, play again?")) 
                        // location.reload();
                        // finalWinner('computer');
                        setTimeout(finalWinner, 2000, 'computer');
                    }
            }
        });

        scissors.addEventListener('click', () => {
            const oneGame=document.createElement('p');
            oneGame.textContent= playRound("scissors");
            // oneGame.classList.add("oneGame");
            outcome.textContent = oneGame.textContent;
            // console.log(playerSpan);
            resultString = oneGame.textContent;
            scissors.classList.add('played')
            if(resultString[4]==='w')
            {
                ++playerMarks;
                if(playerMarks<6)
                // ++playerSpan.textContent;
                playerSpan.textContent=playerMarks;
                // computerSpan.appendChild(computerPoints);   
                if(playerMarks===5) {
                    // ++playerSpan.textContent;
                    // if(confirm("Congratulations: You are the winner, play again?")) 
                    // location.reload();
                    // finalWinner();
                    setTimeout(finalWinner, 2000)
                }
            }
            else if (resultString[4]==='l')
            {
                ++computerMarks;
                if(computerMarks<6)
                // ++computerSpan.textContent;
                computerSpan.textContent = computerMarks;
                if(computerMarks===5)
                    {
                        // ++computerSpan.textContent;
                        // if(confirm("Sorry, You lost, play again?")) 
                        // location.reload();
                        // finalWinner('computer');
                        setTimeout(finalWinner, 2000, 'computer');
                    }
            }
        });

        function removeTransition(e){
            if(e.propertyName!=='transform') return;//skip it if it's not a transform
             this.classList.remove('played');
         }
         const keys = document.querySelectorAll('.fa-solid');
         keys.forEach(key => key.addEventListener('transitionend', removeTransition));