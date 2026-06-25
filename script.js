const lessons = [
{
word:"Hola",
translation:"Hello"
},
{
word:"Gracias",
translation:"Thank You"
},
{
word:"Adiós",
translation:"Goodbye"
},
{
word:"Por Favor",
translation:"Please"
}
];

let current = 0;
let progress = localStorage.getItem("progress") || 0;

document.getElementById("score").innerText = progress;

function nextCard(){

current++;

if(current >= lessons.length){
current = 0;
}

document.getElementById("word").innerText =
lessons[current].word;

document.getElementById("translation").innerText =
lessons[current].translation;

progress++;
localStorage.setItem("progress", progress);
document.getElementById("score").innerText = progress;
}

function speakWord(){

let text =
document.getElementById("word").innerText;

let speech =
new SpeechSynthesisUtterance(text);

speech.lang = "es-ES";

speechSynthesis.speak(speech);
}

function checkAnswer(answer){

if(answer === "Thank You"){
document.getElementById("result").innerText =
"Correct!";
}
else{
document.getElementById("result").innerText =
"Wrong!";
}
}

function showSection(section){

document.getElementById("flashcards").style.display =
"none";

document.getElementById("quiz").style.display =
"none";

document.getElementById(section).style.display =
"block";
}
