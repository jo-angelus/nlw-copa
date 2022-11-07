
function createGame(player1,hour,player2){
  return `
    <li>
      <img src="/assets/icon-${player1}.svg" alt="Ícone do ${player1}">
      <strong>${hour}</strong>
      <img src="/assets/icon-${player2}.svg" alt="Ícone de ${player2}">
    </li>
  `
}

let delay = -0.4;     // Primeiro card / execução sem delay (delay = 0)
function createCard(date,day,games){
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay:${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}     
      </ul>
    </div>
  `
}


document.querySelector("#cards").innerHTML = 
  
    createCard("20/11", "Domingo",createGame("qatar","13:00","ecuador")) + 
    createCard(
      "21/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "22/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "23/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +      
    createCard(
      "24/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "25/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "26/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "27/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +     
    createCard(
      "28/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "29/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +    
    createCard(
      "30/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +     
    createCard(
      "01/12", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    ) +
    createCard(
      "02/12", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon")
    )    
  



/* 
============= Pré Refaturação =========

document.querySelector("#app").innerHTML = `
  <header>
    <img src="/assets/copa-logo.png" alt="logo" >        
  </header>
  <main id="cards">
    ${createCard("20/11", "Domingo",createGame("qatar","13:00","ecuador"))}
    ${createCard(
      "21/11", 
      "Segunda",
      createGame("brazil","08:00","cameroon") +
      createGame("brazil","08:00","cameroon") + 
      createGame("brazil","08:00","cameroon"))}  
  </main>
  
`

*/