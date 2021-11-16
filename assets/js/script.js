const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById('question')
const questionAnswers = document.getElementById("question-answers");
const timer = document.getElementById("timer");
const choicesList = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const nameInitials = document.getElementById("initials");
let shuffled;
let currentIndex;
const questions = [
 {
  question: "Which of the following is correct about features of JavaScript?",
  choices: ["JavaScript is is complementary to and integrated with HTML.", "JavaScript is open and cross-platform.", "Both of the above.", "None of the above."],
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
]



startBtn.addEventListener("click", quizStart)
nextButton.addEventListener("click",()=> {
 currentIndex++
 setNextQuestion()
})  

function quizStart() { 
 console.log('started')
 startBtn.classList.add('hide') 
 shuffled = questions.sort(()=> Math.random() - .5)
 currentIndex = 0
 questionContainer.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffled[currentIndex])
}
function showQuestion(question){
 questionEl.innerText= question.question
 question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')   
  if (answer.correct){
   button.dataset.corret = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonEl.appendChild(button)
 });

}
function resetState( ){
 clearStatusClass(document.body)
 nextButton.classList.add('hide')
 while(answerButtonEl.firstChild)
 {
  answerButtonEl.removeChild
  (answerButtonEl.firstChild)
 }
}

function selectAnswer(event){
 const selectedButton = event.target
 const correct = selectedButton.dataset.correct
 setStatusClass (document.body, correct)
 Array.from(answerButtonEl.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
 })
 if (shuffled.length> currentIndex + 1){
 nextButton.classList.remove('hide')
}else {
 startBtn.innerText = ('Restart')
 startBtn.classList.remove ('hide')
}

function setStatusClass(element, correct) 
{
 clearStatusClass(element)
 if (correct){ 
  element.classList.add ('correct')
 } 
 else{
 element.classList.add('wrong')
 }
}
function clearStatusClass(element){
 element.classList.remove('correct')
 element.classList.remove('wrong')
}