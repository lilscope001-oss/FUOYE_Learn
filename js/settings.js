const currentUser =
JSON.parse(
localStorage.getItem(
"fuoye_current_user"
));

if(!currentUser){

window.location.href =
"login.html";

}

// =====================
// CHANGE USERNAME
// =====================

function changeUsername(){

const newName =
document.getElementById(
"usernameInput"
).value.trim();

if(!newName){

alert(
"Please enter a username"
);

return;

}

currentUser.name =
newName;

localStorage.setItem(
"fuoye_current_user",
JSON.stringify(
currentUser
)
);

let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users = users.map(user => {

if(
user.email ===
currentUser.email
){

user.name = newName;

}

return user;

});

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

alert(
"Username updated successfully"
);

}

// =====================
// DARK MODE
// =====================

function toggleDarkMode(){

document.body.classList.toggle(
"dark-mode"
);

const enabled =
document.body.classList.contains(
"dark-mode"
);

localStorage.setItem(
"darkMode",
enabled
);

}

const savedDarkMode =
localStorage.getItem(
"darkMode"
);

if(savedDarkMode === "true"){

document.body.classList.add(
"dark-mode"
);

}

// =====================
// RESET PROGRESS
// =====================

function resetProgress(){

const confirmReset =
confirm(
"Reset all XP, badges and progress?"
);

if(!confirmReset)
return;

currentUser.xp = 0;
currentUser.streak = 0;
currentUser.badges = [];

localStorage.setItem(
"fuoye_current_user",
JSON.stringify(
currentUser
)
);

let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users = users.map(user => {

if(
user.email ===
currentUser.email
){

user.xp = 0;
user.streak = 0;
user.badges = [];

}

return user;

});

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

alert(
"Progress reset successfully"
);

location.reload();

}

// =====================
// LOGOUT
// =====================

function logout(){

localStorage.removeItem(
"fuoye_current_user"
);

window.location.href =
"login.html";

}