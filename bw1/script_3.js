const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// creazione div per contenitore

let main = document.getElementsByTagName("main")[0]
let domandaAttuale = 1
let punteggio;
let questionNumber = 1

for (let i = 0; i < questions.length; i++) {
  let contenitoreDomanda = document.createElement("div")    // creazione div contenitore domanda
  contenitoreDomanda.classList = "contenitoreDomanda"       // assegnazione class
  contenitoreDomanda.id = "domanda" + [i]                   // assegnazione id
  contenitoreDomanda.style.display = "none"                  // assegnazione display none

  let domanda = document.createElement("div")
  domanda.className = "domanda"
  domanda.innerHTML = "<h1>" + questions[i].question + "</h1>"

  let contatore = document.createElement("div")                                   // creazione contatore domanda
  contatore.id = "contatore"                                                      // assegnazione id
  contatore.innerHTML = "<p>QUESTION " + questionNumber + "<span> / 10<span><p>"

  let contenitoreRisposte = document.createElement("div")   // creazione div contenitore risposte
  contenitoreRisposte.classList = "contenitoreRisposte"     // assegnazione id
  let risposta1 = document.createElement("input")           // creazione button risposta 4
  risposta1.type = "button"                                 // assegnazione type input
  risposta1.id = "risposta" + [domandaAttuale++]            // assegnazione id [domandaAttuale++] per aumentare iteratore
  risposta1.className = "risposta"                          // assegnazione classe
  risposta1.value = questions[i].correct_answer

  for (let x = 0; x < questions[i].incorrect_answers.length; x++) {
    let risposta2 = document.createElement("input")         // creazione button risposta 4
    risposta2.type = "button"                               // assegnazione type input
    risposta2.name = ""
    risposta2.id = "risposta" + [domandaAttuale++]          // assegnazione id [domandaAttuale++] per aumentare iteratore
    risposta2.className = "risposta"                        // assegnazione classe
    risposta2.value = questions[i].incorrect_answers[x]
    contenitoreRisposte.appendChild(risposta2)
  }

  main.appendChild(contenitoreDomanda)
  contenitoreDomanda.appendChild(domanda)
  contenitoreDomanda.appendChild(contenitoreRisposte)
  contenitoreRisposte.appendChild(risposta1)
  contenitoreDomanda.appendChild(contatore)

  questionNumber++
}

let risultato = document.createElement("div")             // creazione div per risultati risposte
risultato.id = "risultato"
risultato.innerHTML = "<h1> complimenti hai ultimato il test e il tuo risultato è " + " / 10</h1>"
risultato.style.display = "none"
main.appendChild(risultato)

function iniziaTest() {                                                                                    // funzione tasto proceed
  domandaCorrente = 0

  document.getElementById("testContainer").style.display = "none";
  document.querySelector(".contenitoreDomanda#domanda" + domandaCorrente).style.display = "flex"
}

document.getElementById("iniziaTest").addEventListener("click", iniziaTest)



document.querySelectorAll(".risposta").forEach(item => {                                                      // loop per aggiungere la funzione mostraDomanda a tutti i button risposta
  item.addEventListener("click", mostraDomanda => {
    document.querySelector(".contenitoreDomanda#domanda" + domandaCorrente).style.display = "none";           // nasconde domanda corrente
    domandaCorrente++;                                                                                        // aggiorna contatore domanda corrente

    if (domandaCorrente < 10) {
      document.querySelector(".contenitoreDomanda#domanda" + domandaCorrente).style.display = "flex";           // mostra domanda successiva
    } else {
      document.getElementById("risultato").style.display = "flex"
    }
  })

})