const quizData = [
   
    {
        question: "Rizqni xalol yo'l bilan topish qanday amal ?",
        a: "Farz",
        b: "Sunnat",
        c: "Makrux",
        d: "Muboh",
        correct: "a",
    },
    {
        question: "Ilm olish qanday amal ?",
        a: "Farz",
        b: "Sunnat",
        c: "Vojib",
        d: "Makruh",
        correct: "a",
    },
    {
        question: "Namoz farzlari nechta ?",
        a: "17 ta",
        b: "12 ta",
        c: "10 ta",
        d: "19 ta",
        correct: "b",
    },
    {
        question: "G'usl farzlari nechta ?",
        a: "10 ta",
        b: "3 ta",
        c: "5 ta",
        d: "Bilmayman",
        correct: "b",
    },
    {
        question: "Shis a.s singlisini ismi ?",
        a: "Hazuro",
        b: "Huzayfa",
        c: "Moriya",
        d: "Bilmayman",
        correct: "a",
    },
    {
        question: "Shis a.s ga necha sahifali kitob tushirilgan ?",
        a: "60",
        b: "80",
        c: "50",
        d: "Bilmayman",
        correct: "d",
    },
    {
        question: "Odam Alayhissalom necha yoshga yetganlarida Shis a.s tug'ilganlar ?",
        a: "156",
        b: "135",
        c: "130",
        d: "138",
        correct: "c",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button class="btn" onclick="location.reload()">Reload</button>
            `;
        }
    }
});