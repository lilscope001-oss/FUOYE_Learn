const user =
JSON.parse(
localStorage.getItem(
"fuoye_current_user"
));

if(!user){

window.location.href =
"login.html";

}

document.getElementById(
"xpValue"
).innerText =
user.xp || 0;

document.getElementById(
"badgeValue"
).innerText =
user.badges
? user.badges.length
: 0;

let level = "100L";

if(user.xp >= 600)
level = "200L";

if(user.xp >= 1200)
level = "300L";

if(user.xp >= 2000)
level = "400L";

document.getElementById(
"levelValue"
).innerText =
level;

const overall =
Math.min(
(user.xp / 2000) * 100,
100
);

document.getElementById(
"overallProgress"
).style.width =
overall + "%";

document.getElementById(
"overallText"
).innerText =
overall.toFixed(0)
+ "% Completed";

const courses = [

{
name:"CSC101",
progress:100
},

{
name:"CSC201",
progress:
user.xp >= 100
? 75
: 20
},

{
name:"CSC301",
progress:
user.xp >= 300
? 50
: 0
},

{
name:"CSC401",
progress:
user.xp >= 600
? 20
: 0
}

];

document.getElementById(
"courseValue"
).innerText =
courses.filter(
c => c.progress >= 100
).length;

const container =
document.getElementById(
"courseContainer"
);

courses.forEach(course => {

container.innerHTML += `

<div class="course-item">

<div class="course-name">

${course.name}

</div>

<div class="small-progress">

<div
class="small-fill"
style="width:${course.progress}%">

</div>

</div>

<br>

${course.progress}% Complete

</div>

`;

});