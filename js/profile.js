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
"name"
).innerText =
user.name;

document.getElementById(
"email"
).innerText =
user.email;

document.getElementById(
"matric"
).innerText =
user.matric;

document.getElementById(
"xp"
).innerText =
user.xp;

document.getElementById(
"badges"
).innerText =
user.badges.length
? user.badges.join(", ")
: "No badges yet";