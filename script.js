const questions = [
    { text: "Noem een bekende landstitel of hoofdstedelijke stad in Europa (behalve Parijs/London)", answers: [] },
    { text: "Noem een dier dat in de oceaan leeft", answers: [] },
    { text: "Noem een film van Steven Spielberg", answers: [] }
];

let currentQuestionIndex = 0;
let currentAnswers = []; // Bevat objecten zoals { player: "Tom", text: "Haai" }

const questionText = document.getElementById('questionText');
const playerInput = document.getElementById('playerInput');
const addBtn = document.getElementById('addBtn');
const answersList = document.getElementById('answersList');
const diveBtn = document.getElementById('diveBtn');
const nextBtn = document.getElementById('nextBtn');
const ocean = document.getElementById('ocean');
const depthMeter = document.getElementById('depthMeter');

// Start de quiz met de eerste vraag
function loadQuestion() {
    questionText.innerText = questions[currentQuestionIndex].text;
    currentAnswers = [];
    answersList.innerHTML = '
