
function createGame(player1,hour,player2){
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Ícone do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Ícone de ${player2}">
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
      createGame("england","10:00","iran") +
      createGame("senegal","13:00","netherlands") + 
      createGame("united states","16:00","wales")
    ) +
    createCard(
      "22/11", 
      "Segunda",
      createGame("argentina","07:00","saudi arabia") +
      createGame("denmark","10:00","tunisia") +
      createGame("mexico","13:00","poland") + 
      createGame("france","16:00","australia")
    ) +
    createCard(
      "23/11", 
      "Segunda",
      createGame("morocco","07:00","croatia") +
      createGame("germany","10:00","japan") +
      createGame("spain","13:00","costa rica") + 
      createGame("belgium","16:00","canada")
    ) +      
    createCard(
      "24/11", 
      "Segunda",
      createGame("switzerland","07:00","cameroon") +
      createGame("uruguay","10:00","south korea") +
      createGame("portugal","13:00","ghana") + 
      createGame("brazil","16:00","serbia")
    ) +
    createCard(
      "25/11", 
      "Segunda",
      createGame("wales","07:00","iran") +
      createGame("qatar","10:00","senegal") +
      createGame("netherlands","13:00","ecuador") + 
      createGame("england","16:00","united states")
    ) +
    createCard(
      "26/11", 
      "Segunda",
      createGame("tunisia","07:00","australia") +
      createGame("poland","10:00","saudi arabia") +
      createGame("france","13:00","denmark") + 
      createGame("argentina","16:00","mexico")
    ) +
    createCard(
      "27/11", 
      "Segunda",
      createGame("japan","07:00","costa rica") +
      createGame("belgium","10:00","morocco") +
      createGame("croatia","13:00","canada") + 
      createGame("spain","16:00","germany")
    ) +     
    createCard(
      "28/11", 
      "Segunda",
      createGame("cameroon","07:00","serbia") +
      createGame("south korea","10:00","ghana") +
      createGame("brazil","13:00","switzerland") + 
      createGame("portugal","16:00","uruguay")
    ) +
    createCard(
      "29/11", 
      "Segunda",
      createGame("netherlands","12:00","qatar") +
      createGame("ecuador","12:00","senegal") +
      createGame("wales","16:00","england") + 
      createGame("iran","16:00","united states")
    ) +    
    createCard(
      "30/11", 
      "Segunda",
      createGame("poland","12:00","argentina") +
      createGame("saudi arabia","12:00","mexico") +
      createGame("tunisia","16:00","france") + 
      createGame("australia","16:00","denmark")
    ) +     
    createCard(
      "01/12", 
      "Segunda",
      createGame("croatia","12:00","belgium") +
      createGame("canada","12:00","morocco") +
      createGame("japan","16:00","spain") + 
      createGame("costa rica","16:00","germany")
    ) +
    createCard(
      "02/12", 
      "Segunda",
      createGame("south korea","12:00","portugal") +
      createGame("ghana","12:00","uruguay") +
      createGame("cameroon","16:00","brazil") + 
      createGame("serbia","16:00","switzerland")
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