const currentUser =
JSON.parse(
localStorage.getItem(
"fuoye_current_user"
)
);

const quizData = {

CSC101:[

{
question:
"What does CPU stand for?",

options:[
"Central Processing Unit",
"Computer Power Unit",
"Central Program Utility",
"Control Processing Unit"
],

answer:0
},

{
question:
"Which is an operating system?",

options:[
"Microsoft Word",
"Windows",
"Google",
"CPU"
],

answer:1
},

{
question:
"Which is an input device?",

options:[
"Monitor",
"Speaker",
"Keyboard",
"Projector"
],

answer:2
}

],

CSC201:[

{
question:
"What data structure uses FIFO?",

options:[
"Stack",
"Queue",
"Tree",
"Array"
],

answer:1
},

{
question:
"Stack uses?",

options:[
"LIFO",
"FIFO",
"FILO",
"None"
],

answer:0
},

{
question:
"Which structure stores nodes?",

options:[
"Tree",
"Array",
"Queue",
"Stack"
],

answer:0
}

],

CSC301:[

{
question:
"SQL stands for?",

options:[
"Structured Query Language",
"Simple Query Language",
"Server Query Logic",
"System Query Language"
],

answer:0
},

{
question:
"What is a primary key?",

options:[
"Duplicate value",
"Unique identifier",
"Foreign table",
"Query"
],

answer:1
},

{
question:
"Normalization reduces?",

options:[
"Speed",
"Redundancy",
"Tables",
"Queries"
],

answer:1
}

]

};

const params =
new URLSearchParams(
window.location.search
);

const course =
params.get("course");

document.getElementById(
"courseTitle"
).innerText =
course + " Quiz";

let questions =
quizData[course] || [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

const questionElement =
document.getElementById(
"question"
);

const optionsElement =
document.getElementById(
"options"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

function loadQuestion(){

let q =
questions[currentQuestion];

questionElement.innerText =
q.question;

optionsElement.innerHTML = "";

q.options.forEach(
(option,index)=>{

const div =
document.createElement("div");

div.classList.add(
"option"
);

div.innerText = option;

div.addEventListener(
"click",
()=>{

selectedAnswer = index;

document
.querySelectorAll(".option")
.forEach(el=>{

el.style.background =
"#f4f4f4";

});

div.style.background =
"#bff0d2";

}
);

optionsElement.appendChild(div);

}
);

}

loadQuestion();

nextBtn.addEventListener(
"click",
()=>{

if(selectedAnswer === null){

alert(
"Select an answer first."
);

return;

}

if(
selectedAnswer ===
questions[currentQuestion].answer
){

score++;

}

selectedAnswer = null;

currentQuestion++;

if(
currentQuestion <
questions.length
){

loadQuestion();

}else{

finishQuiz();

}

}
);

function finishQuiz(){

document.getElementById(
"quizArea"
).style.display = "none";

document.getElementById(
"result"
).style.display = "block";

const xpEarned =
score * 50;

document.getElementById(
"scoreText"
).innerText =
Score: ${score}/${questions.length};

document.getElementById(
"xpText"
).innerText =
You earned ${xpEarned} XP;

if(currentUser){

currentUser.xp =
(currentUser.xp || 0)
+ xpEarned;

let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users = users.map(user=>{

if(user.email ===
currentUser.email){

user.xp =
currentUser.xp;

}

return user;

});

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

localStorage.setItem(
"fuoye_current_user",
JSON.stringify(currentUser)
);

}

updateAchievements(
xpEarned
);

}

function updateAchievements(){

if(!currentUser) return;

if(
currentUser.xp >= 100 &&
!currentUser.badges.includes(
"Beginner"
)
){

currentUser.badges.push(
"Beginner"
);

}

if(
currentUser.xp >= 300 &&
!currentUser.badges.includes(
"Scholar"
)
){

currentUser.badges.push(
"Scholar"
);

}

if(
currentUser.xp >= 500 &&
!currentUser.badges.includes(
"Master Learner"
)
){

currentUser.badges.push(
"Master Learner"
);

}

let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users = users.map(user=>{

if(user.email ===
currentUser.email){

user.badges =
currentUser.badges;

}

return user;

});

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

localStorage.setItem(
"fuoye_current_user",
JSON.
stringify(currentUser)
);

}