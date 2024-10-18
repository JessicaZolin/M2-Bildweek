const questions = [
    {
        category: "Science: Computers",
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
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
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
        question: "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


// -------- Inizializza l'indice della domanda corrente e il punteggio

let currentQuestionIndex = 0;
let score = 0;
let questionNumber = 1;



// -------- Crea div container, quiz, score 

let main = document.getElementsByTagName("main")[0]

const container = document.createElement("div")
container.classList = "container"
container.style.display = "none"
main.appendChild(container)

const quizDiv = document.createElement("div")
quizDiv.id = "quiz"
container.appendChild(quizDiv)

const scoreDiv = document.createElement("div")
scoreDiv.id = "score"
scoreDiv.classList = "finale"
container.appendChild(scoreDiv)


// -------- Funzione per iniziare il test dopo aver flaggato la checkbox, con collegamento al click del bottone

let proceed = document.getElementById("iniziaTest")

proceed.onclick = function iniziaTest() {

    // -------- seleziona elemento checkbox per poter effettuare controllo sulla spuntatura
    let checkbox = document.getElementById("checkboxButton")
    if (checkbox.checked === true) {

        // -------- se vero nascondi pagina welcome e mostra prima domanda avviando funzione displayQuestion
        document.getElementById("testContainer").style.display = "none";
        document.getElementsByClassName("container")[0].style.display = "flex"  
        displayQuestion ();
    } else {

        // -------- se falso stampa in HTML messaggio
        const errore = document.createElement("div")
        errore.innerHTML = "<p>per iniziare il test devi prima accettare le condizioni!!</p>"
        errore.style.color = "red"
        document.getElementById("testContainer").appendChild(errore)   
    }
}



// -------- Funzione per visualizzare la domanda attuale

function displayQuestion() {

    // -------- Pulisce il contenuto del div per visualizzare la nuova domanda
    quizDiv.innerHTML = '';

    // -------- Ottiene la domanda corrente dall'array 'questions'
    const currentQuestion = questions[currentQuestionIndex];

    // -------- Crea un elemento h1 per la domanda
    const questionText = document.createElement('h1');

    // -------- Imposta il testo dell'elemento h1 con la domanda corrente
    questionText.innerText = currentQuestion.question;
    // -------- Aggiunge l'elemento h1 al div del quiz
    quizDiv.appendChild(questionText);




    const allAnswers = [];
    // -------- Aggiunge tutte le risposte all'array
    for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
        allAnswers.push(currentQuestion.incorrect_answers[i]);
    }
    // -------- Aggiunge la risposta corretta
    allAnswers.push(currentQuestion.correct_answer);

    // -------- assortire a random l'arrayS
    allAnswers.sort(() => Math.random() - 0.5);

    // -------- Aggiunge div per risposte al quiz
    const containerAnswer = document.createElement("div")
    containerAnswer.id = "containerAnswer"
    quizDiv.appendChild(containerAnswer)





    // --------- Mostra i pulsanti delle risposte
    for (let i = 0; i < allAnswers.length; i++) {
        // --------- Crea un nuovo pulsante per ogni risposta
        const button = document.createElement('button');
        // --------- Imposta il testo del pulsante con la risposta
        button.innerText = allAnswers[i];
        // --------- Aggiunge un gestore di eventi 'onclick' per il pulsante
        // --------- Verifica se la risposta è corretta e chiama 'handleAnswer'
        button.onclick = () => handleAnswer(allAnswers[i] === currentQuestion.correct_answer);
        // --------- Aggiunge il pulsante al div del quiz
        containerAnswer.appendChild(button);
    }



    // -------- Aggiunge div contatore al quiz
    const contatore = document.createElement("div")
    contatore.id = "contatore"
    contatore.innerHTML = "<p>QUESTION " + questionNumber++ + "<span> / 10<span><p>"
    quizDiv.appendChild(contatore)
}




// --------- Funzione per gestire la risposta dell'utente
function handleAnswer(isCorrect) {
    // --------- Logga se la risposta è corretta o sbagliata
    console.log(`Risposta: ${isCorrect ? "Corretto" : "Sbagliato"}`);
    // --------- Incrementa il punteggio se la risposta è corretta
    if (isCorrect) {
        score++;
    }
    // --------- Incrementa l'indice della domanda corrente
    currentQuestionIndex++;
    // --------- Se ci sono ancora domande, visualizza la prossima
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // --------- Altrimenti, mostra il punteggio finale
        displayScore();
    }
}

// Funzione per visualizzare il punteggio finale
function displayScore() {
    // -------- Pulisce il contenuto del div per visualizzare la nuova domanda
    quizDiv.innerHTML = '';
    // Imposta il testo del punteggio finale
    scoreDiv.innerHTML = `Il tuo punteggio finale è di: <br> ${score} su ${questions.length}!`;
    // Rimuove la classe 'finale' (probabilmente per stilizzare il punteggio)
    scoreDiv.classList.remove('finale');
}

