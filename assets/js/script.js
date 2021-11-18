const questionsEl = document.getElementById("questions");
const timerEl = document.getElementById("time");

const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");
const initialsEl = document.getElementById("initials")
const feedbackEl = document.getElementById("feedback")
let highscorePage = document.getElementById("highscorePage")
let time = 60;
let score = 0;
let currentIndex = 0;

const questions = [
 {
  question: "Which of the following is correct about features of JavaScript?",
  choices: [
   "JavaScript is is complementary to and integrated with HTML",
   "JavaScript is open and cross-platform.",
   "Both of the above.",
   "None of the above."],
  answer: "Both of the above."
 },
 {
  question: "Which built-in method combines the text of two strings and returns a new string?",
  choices: ["append", "concat", "attach", "None of the above"],
  answer: "concat"
 },
 {
  question: "Arrays in JavaScript can be used to store:---",
  choices: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
  answer: "all of the above"
 },
 {
  question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
  choices: ["slice", "split", "substr", "search"],
  answer: "substr"
 },
 {
  question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
  choices: ["pull", "push", "join", "add"],
  answer: "push"
 },
 {
  question: "Inside which HTML element do we put the JavaScript?",
  choices: ["scripting", "script", "js", "javascript"],
  answer: "script"
 },
 {
  question: "Which event occurs when the user clicks on an HTML element?",
  choices: ["onclick", "click", "onmouseclick", "hoover"],
  answer: "onclick"
 },
]



startBtn.onclick = startQuiz;
function startQuiz() {

 const mainScreenEl = document.getElementById("main-screen");
 mainScreenEl.classList.add("hide");

 questionsEl.classList.remove("hide");


 timerId = setInterval(timer, 1000);

 timerEl.textContent = time;

 startQuestion();
}

function startQuestion() {

 const currentQuestion = questions[currentIndex];
 const choicesEl = document.getElementById("choices");
 const questionTitleEl = document.getElementById("question-screen");
 questionTitleEl.textContent = currentQuestion.question;
 choicesEl.innerHTML = "";

 currentQuestion.choices.forEach((choices, i) => {

  let choicesItems = document.createElement("button");
  choicesItems.setAttribute("class", "choices");
  choicesItems.setAttribute("value", choices);

  choicesItems.textContent = i + 1 + ". " + choices;
  choicesItems.onclick = questionClick;
  choicesEl.appendChild(choicesItems);
 });
}

function questionClick() {

 if (this.value !== questions[currentIndex].answer) {
  time -= 10;

  if (time < 0) {
   time = 0;
  }

  timerEl.textContent = time;

  feedbackEl.textContent = "Wrong!";
 } else {
  feedbackEl.textContent = "Correct!";
 }

 feedbackEl.setAttribute("class", "feedback");
 setTimeout(function () {
  feedbackEl.setAttribute("class", "feedback hide");
 }, 1000);

 currentIndex++;

 if (currentIndex === questions.length) {
  quizEnd();
 } else {
  startQuestion();
 }
}

function quizEnd() {

 clearInterval(timerId);

 const quizEndEl = document.getElementById("quiz-finished");
 quizEndEl.classList.remove("hide");


 const finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = time;


 questionsEl.classList.add("hide");
}

function timer() {
 time--;
 timerEl.textContent = time;

 if (time <= 0) {
  quizEnd();
 }
}

const getHighscores = () => {
 document.getElementById('highscores').innerHTML = '';

 let highScores = JSON.parse(localStorage.getItem('highscore')) || []
 let initial = initialsEl.value
 console.log (initial)
 let scoreObject = { initial: initial, score: time }
 highScores.push(scoreObject)
 console.log(highScores)

localStorage.setItem("highScores", JSON.stringify(highScores))


 let listofHighscore = document.getElementById('highscores');

 for (let i = 0; i < highScores.length; i++) {
  let highscoreEl = document.createElement('li');
  highscoreEl.className = "list-group-item";
  highscoreEl.innerHTML = `Initial = ${highScores[i].initial} Your Score= ${highScores[i].score}`
  highscorePage.append(highscoreEl)
 }

 document.getElementById('highscorePage').style.display = "";
}
submitBtn.addEventListener("click", event => (
 
 getHighscores()
 
))


