const questions = [
    { text: "Noem een land in Oceanië" },
    { text: "Noem een land groter dan Mexico (oppervlakte)" },
    { text: "Noem een land dat ooit deel uitmaakte van het Romeinse Rijk" },
    { text: "Noem een land dat grenst aan meer dan 5 landen" },
    { text: "Noem een stad in de Verenigde Staten met meer dan 1 miljoen inwoners" },
    { text: "Noem een land met minstens één ster op de vlag" },
    { text: "Noem een stad die meer inwoners heeft dan de hoofdstad van datzelfde land" },
    { text: "Noem een Europees land met MINDER dan 1 miljoen inwoners" },
    { text: "Noem een land dat op twee continenten ligt" },
    { text: "Noem een symbool of vorm die op een nationale vlag voorkomt (zoals een ster)" }
];

let currentQuestionIndex = 0;
let currentAnswers = []; 

const questionText = document.getElementById('questionText');
const playerInput = document.getElementById('playerInput');
const addBtn = document.getElementById('addBtn');
const answersList = document.getElementById('answersList');
const diveBtn = document.getElementById('diveBtn');
const nextBtn = document.getElementById('nextBtn');
const ocean = document.getElementById('ocean');
const depthMeter = document.getElementById('depthMeter');

// Laad de huidige vraag
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.innerText = `Vraag \({currentQuestionIndex + 1}:\){questions[currentQuestionIndex].text}`;
        currentAnswers = [];
        answersList.innerHTML = '
