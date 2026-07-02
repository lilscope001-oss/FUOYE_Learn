function updateStreak(){

const user =
JSON.parse(
localStorage.getItem(
"fuoye_current_user"
));

if(!user) return;

const today =
new Date()
.toDateString();

const lastVisit =
localStorage.getItem(
"lastVisit"
);

if(lastVisit !== today){

user.streak =
(user.streak || 0) + 1;

user.xp =
(user.xp || 0) + 20;

localStorage.setItem(
"lastVisit",
today
);

localStorage.setItem(
"fuoye_current_user",
JSON.stringify(user)
);

let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users = users.map(u => {

if(
u.email ===
user.email
){

u.streak =
user.streak;

u.xp =
user.xp;

}

return u;

});

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

}

}

updateStreak();