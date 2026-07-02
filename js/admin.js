let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

const table =
document.getElementById(
"userTable"
);

renderUsers();

function renderUsers(){

table.innerHTML = "";

users.forEach((user,index)=>{

table.innerHTML += `

<tr>

<td>${user.name}</td>

<td>${user.email}</td>

<td>${user.xp || 0}</td>

<td>

<button
class="edit-btn"
onclick="addXP(${index})">

+50 XP

</button>

<button
class="delete-btn"
onclick="deleteUser(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function addXP(index){

users[index].xp =
(users[index].xp || 0) + 50;

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

renderUsers();

}

function deleteUser(index){

if(
!confirm(
"Delete this user?"
)
) return;

users.splice(index,1);

localStorage.setItem(
"fuoye_users",
JSON.stringify(users)
);

renderUsers();

}