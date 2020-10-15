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

    startGame() {
        quizIndex = 0;
        correctAnswerCount = 0;
        this.nextQuestion();
    }

    endGame() {
        quizZoneParent.style.display = "none";
        quizIntro.style.filter = "blur(0px)";
        console.log("end game");
    }

    nextQuestion() {
        this.prepareNextQuestion();
        currentQuestion = this.questionList[quizIndex];
        if (currentQuestion)
            this.displayQuestion(quizIndex++, currentQuestion.question, currentQuestion.answers);
        else
            this.endGame();
    }

    checkAnswer(question, userAnswer) {
        return question.answers.some(a => {
            return a.answer === userAnswer && a.isCorrect;
        })
    }

    showAnswer(question, userAnswer) {
        let isCorrectAnswer = this.checkAnswer(question, userAnswer);
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
        quizBottomContainer.style.display = "block";
    }

    prepareNextQuestion() {
        isChosen = false;
        quizZone.classList.remove("animate");
        answerBtns.forEach(button => {
            let oldButton = button.setAttribute('style', '');
            return oldButton;
        });
        quizZone.classList.add("animate");
        quizBottomContainer.style.display = "none";
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
let quizZoneParent = document.querySelector(".quiz-zone-parent");
let quizZone = document.querySelector(".quiz-zone");
let quizZoneQuestion = document.querySelector(".quiz-zone-question");
let quizBottomContainer = document.querySelector(".bottom-container");

let startGameBtn = document.querySelector(".start-button");
let answerBtns = document.querySelectorAll(".quiz-container");
let nextBtn = document.querySelector(".next-button");
let exitBtn = document.querySelector(".X");

let quizTitle = document.querySelector(".quiz");
let quizCount = document.querySelector(".quiz-count");
let quizResult = document.querySelector(".quiz-result");

let quizIndex = 0;
let correctAnswerCount = 0;
let isChosen = false;

let currentQuestion;
let currentAnswer;
let currentAnswerBtn;

let quizGame;

startGameBtn.addEventListener("click", () => {
    quizGame = new QuizGame(questions);
    quizZoneParent.style.display = "block";
    quizIntro.style.filter = "blur(5px)";
    quizGame.startGame();
});

exitBtn.addEventListener("click", () => {
    quizZoneParent.style.display = "none";
    quizIntro.style.filter = "blur(0px)";
    quizGame.endGame();
});

answerBtns.forEach(button => {
    button.addEventListener("dblclick", () => {
        if (!isChosen) {
            currentAnswerBtn = button;
            currentAnswer = button.children[0].innerHTML;
            quizGame.showAnswer(currentQuestion, currentAnswer);
            isChosen = true;
        }
    })
});

nextBtn.addEventListener("click", () => {
    quizGame.nextQuestion();
})