let questions = [
    {
        id: 1,
        question: "Who was the king of gods?",
        answers: [
            {
                answer: "Hercules",
                isCorrect: false,
            },
            {
                answer: "Hades",
                isCorrect: false,
            },
            {
                answer: "Zeus",
                isCorrect: true,
            },
            {
                answer: "Hermes",
                isCorrect: false,
            }
        ]
    },
    {
        id: 2,
        question: "Which goddess was born fully armored from Zeus's head?",
        answers: [
            {
                answer: "Hera",
                isCorrect: false,
            },
            {
                answer: "Persephone",
                isCorrect: false,
            },
            {
                answer: "Aphrodite",
                isCorrect: false,
            },
            {
                answer: "Athena",
                isCorrect: true,
            }
        ]
    },
    {
        id: 3,
        question: "Who was the goddess of love and beauty?",
        answers: [
            {
                answer: "Athena",
                isCorrect: false,
            },
            {
                answer: "Aphrodite",
                isCorrect: true,
            },
            {
                answer: "Hera",
                isCorrect: false,
            },
            {
                answer: "Persephone",
                isCorrect: false,
            }
        ]
    },
    {
        id: 4,
        question: "Which three gods divided up the heavens, seas and underworld?",
        answers: [
            {
                answer: "Ares, Poseidon and Hades",
                isCorrect: false,
            },
            {
                answer: "Zeus, Poseidon and Hermes",
                isCorrect: false,
            },
            {
                answer: "Ares, Apollo and Hades",
                isCorrect: false,
            },
            {
                answer: "Poseidon, Zeus and Hades",
                isCorrect: true,
            }
        ]
    },
    {
        id: 5,
        question: "Which child of Cronos did Rhea hide away?",
        answers: [
            {
                answer: "Poseidon",
                isCorrect: false,
            },
            {
                answer: "Ares",
                isCorrect: false,
            },
            {
                answer: "Zeus",
                isCorrect: true,
            },
            {
                answer: "Hephestus",
                isCorrect: false,
            }
        ]
    },
    {
        id: 6,
        question: "Who were Cronus and Rhea?",
        answers: [
            {
                answer: "The king and queen of Titans",
                isCorrect: true,
            },
            {
                answer: "The Sun and Moon god and goddess",
                isCorrect: false,
            },
            {
                answer: "The parents of Gaea and Uranus",
                isCorrect: false,
            },
            {
                answer: "Children of Zeus and Hera",
                isCorrect: false,
            }
        ]
    },
    {
        id: 7,
        question: "Why does Cronus swallow his children?",
        answers: [
            {
                answer: "The Oracle told him to",
                isCorrect: false,
            },
            {
                answer: "To avoid being dethroned by his son",
                isCorrect: true,
            },
            {
                answer: "To Appease his wife Rhea",
                isCorrect: false,
            },
            {
                answer: "To attain a better place in the Underworld",
                isCorrect: false,
            }
        ]
    },
    {
        id: 8,
        question: "Who was the messenger of the gods?",
        answers: [
            {
                answer: "Apollo",
                isCorrect: false,
            },
            {
                answer: "Hephaestus",
                isCorrect: false,
            },
            {
                answer: "Poseidon",
                isCorrect: false,
            },
            {
                answer: "Hermes",
                isCorrect: true,
            }
        ]
    },
    {
        id: 9,
        question: "Who was the goddess of the harvest?",
        answers: [
            {
                answer: "Hera",
                isCorrect: false,
            },
            {
                answer: "Demeter",
                isCorrect: true,
            },
            {
                answer: "Rhea",
                isCorrect: false,
            },
            {
                answer: "Artemis",
                isCorrect: false,
            }
        ]
    },
    {
        id: 10,
        question: "Who was Hades' wife?",
        answers: [
            {
                answer: "Hera",
                isCorrect: false,
            },
            {
                answer: "Demeter",
                isCorrect: false,
            },
            {
                answer: "Persephone",
                isCorrect: true,
            },
            {
                answer: "Athena",
                isCorrect: false,
            }
        ]
    }
]

class QuizGame {
    constructor(questionList) {
        this.questionList = questionList;
        this.shuffleQuestion();
    }

    shuffleQuestion() {
        this.questionList = shuffleArray(this.questionList);
        for (let i = 0; i < this.questionList.length; i++) {
            shuffleArray(this.questionList[i].answers);
        }
    }

    displayQuestion(index, question, answers) {
        index += 1;
        quizCount.innerHTML = `Quiz: ${index}/${this.questionList.length}`;
        quizTitle.innerHTML = question;
        for (let i = 0; i < answerBtns.length; i++) {
            let answerBtn = answerBtns[i];
            answerBtn.children[0].innerHTML = answers[i].answer;
        }
    }

    start() {
        quizIndex = 0;
        this.nextQuestion();
    }

    end() {
        quizZoneParent.style.display = "none";
        quizIntro.style.filter = "blur(0px)";
        console.log("ahihi");
    }

    nextQuestion() {
        currentQuestion = this.questionList[quizIndex];
        if (currentQuestion) {
            this.displayQuestion(quizIndex++, currentQuestion.question, currentQuestion.answers);
        }
        else {
            this.end();
        }
    }

    checkAnswer(question, answer) {
        for (let i = 0; i < question.answers.length; i++) {
            let a = question.answers[i];
            if (a.answer === answer && a.isCorrect)
                return true;
        }
        return false;
    }

    showAnswer(question, answer) {
        let isCorrectAnswer = this.checkAnswer(question, answer);
        if (isCorrectAnswer) {
            correctAnswerCount++;
            currentAnswerBtn.style.background = "#2095F3";
            currentAnswerBtn.style.color = "white";
            quizResult.innerHTML = "Correct!";
        }
        else {
            currentAnswerBtn.style.background = "#ff4a5a";
            currentAnswerBtn.style.color = "white";
            quizResult.innerHTML = "Incorrect!";
        }
    }

    prepareNextQuestion() {
        quizAnswerZone.setAttribute('quiz-container', '');
        currentAnswerBtn.style.background = "white";
        currentAnswerBtn.style.color = "black";
        nextBtn.style.display = "none";
        quizResult.innerHTML = "";
    }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    let j, tmp;
    for (let i = array.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

let quizIntro = document.querySelector("section");
let startBtn = document.querySelector(".start-button");
let quizZoneParent = document.querySelector(".quiz-zone-parent");
let quizZone = document.querySelector(".quiz-zone-question");
let quizAnswerZone = document.querySelector(".quiz-answer-zone");
let quizCount = document.querySelector(".quiz-count");
let quizTitle = document.querySelector(".quiz");
let exitBtn = document.querySelector(".X");
let answerBtns = document.querySelectorAll(".quiz-container");
let nextBtn = document.querySelector(".next-button");
let quizResult = document.querySelector(".quiz-result");
let quizExitWarningZone = document.querySelector(".quiz-exit-warning");

let quizIndex;
let currentQuestion;
let currentAnswer;
let currentAnswerBtn;
let correctAnswerCount = 0;
let quizGame;

startBtn.addEventListener("click", () => {
    quizGame = new QuizGame(questions);
    quizZoneParent.style.display = "block";
    quizIntro.style.filter = "blur(5px)";
    quizGame.start();
});

exitBtn.addEventListener("click", () => {
    quizZoneParent.style.display = "none";
    quizIntro.style.filter = "blur(0px)";
    quizGame.end();
});

answerBtns.forEach(button => {
    button.addEventListener("dblclick", () => {
        currentAnswerBtn = button;
        currentAnswer = button.children[0].innerHTML;
        quizGame.showAnswer(currentQuestion, currentAnswer);
        nextBtn.style.display = "block";
    })
});

nextBtn.addEventListener("click", () => {
    quizGame.prepareNextQuestion();
    quizGame.nextQuestion();
})