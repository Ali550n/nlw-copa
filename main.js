function creatGame(player1, hour, player2) {
  return `
        <li>
            <img src="./assets/flag_${player1}.svg" alt="Bandeira da ${player1}"/>
                <strong>${hour}</strong>
            <img src="./assets/flag_${player2}.svg" alt="Bandeira de ${player2}"/>
        </li>
    
    `;
}

let delay = -0.3;
function creatCards(date, day, games) {
  delay = delay + 0.2;
  return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML =
  creatCards("20/11", "domingo", creatGame("catar", "13:00", "equador")) +
  creatCards(
    "21/11",
    "segunda",
    creatGame("inglaterra", "10:00", "ira") +
      creatGame("senegal", "13:00", "holanda") +
      creatGame("eua", "16:00", "gales")
  ) +
  creatCards(
    "22/11",
    "terça",
    creatGame("argentina", "07:00", "arabia") +
      creatGame("dinamarca", "10:00", "tunisia") +
      creatGame("mexico", "13:00", "polonia") +
      creatGame("franca", "16:00", "australia")
  ) +
  creatCards(
    "24/11",
    "quinta",
    creatGame("suica", "07:00", "camaroes") +
      creatGame("uruguai", "10:00", "coreia") +
      creatGame("portugal", "13:00", "gana") +
      creatGame("brasil", "16:00", "servia")
  ) +
  creatCards(
    "25/11",
    "sexta",
    creatGame("gales", "07:00", "ira") +
      creatGame("catar", "10:00", "senegal") +
      creatGame("holanda", "13:00", "equador") +
      creatGame("inglaterra", "16:00", "eua")
  ) +
  creatCards(
    "26/11",
    "sabado",
    creatGame("tunisia", "07:00", "australia") +
      creatGame("polonia", "10:00", "arabia") +
      creatGame("franca", "13:00", "dinamarca") +
      creatGame("argentina", "16:00", "mexico")
  ) +
  creatCards(
    "27/11",
    "domingo",
    creatGame("japao", "07:00", "costarica") +
      creatGame("belgica", "10:00", "marrocos") +
      creatGame("croacia", "13:00", "canada") +
      creatGame("espanha", "16:00", "alemanha")
  ) +
  creatCards(
    "28/11",
    "segunda",
    creatGame("camaroes", "07:00", "servia") +
      creatGame("coreia", "10:00", "gana") +
      creatGame("brasil", "13:00", "suica") +
      creatGame("portugal", "16:00", "uruguai")
  ) +
  creatCards(
    "29/11",
    "terça",
    creatGame("equador", "12:00", "senegal") +
      creatGame("holanda", "12:00", "catar") +
      creatGame("ira", "16:00", "eua") +
      creatGame("gales", "16:00", "inglaterra")
  ) +
  creatCards(
    "30/11",
    "quarta",
    creatGame("tunisia", "12:00", "franca") +
      creatGame("australia", "12:00", "dinamarca") +
      creatGame("polonia", "16:00", "argentina") +
      creatGame("arabia", "16:00", "mexico")
  ) +
  creatCards(
    "01/12",
    "quinta",
    creatGame("croacia", "12:00", "belgica") +
      creatGame("canada", "12:00", "marrocos") +
      creatGame("japao", "16:00", "espanha") +
      creatGame("costarica", "16:00", "alemanha")
  ) +
  creatCards(
    "02/12",
    "sexta",
    creatGame("coreia", "12:00", "portugal") +
      creatGame("gana", "12:00", "uruguai") +
      creatGame("servia", "16:00", "suica") +
      creatGame("camaroes", "16:00", "brasil")
  );

const change_color = document.querySelector("body");
const yellow_botton = document.querySelector("#themes #theme-yellow");
const blue_botton = document.querySelector("#themes #theme-blue");
const green_botton = document.querySelector("#themes #theme-green");

yellow_botton.addEventListener("click", () => {
  change_color.classList.remove("blue");
  change_color.classList.remove("green");
  change_color.classList.add("yellow");
});

blue_botton.addEventListener("click", () => {
  change_color.classList.remove("yellow");
  change_color.classList.remove("green");
  change_color.classList.add("blue");
});

green_botton.addEventListener("click", () => {
  change_color.classList.remove("blue");
  change_color.classList.remove("yellow");
  change_color.classList.add("green");
});
