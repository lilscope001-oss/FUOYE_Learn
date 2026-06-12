let users =
JSON.parse(
localStorage.getItem(
"fuoye_users"
)
) || [];

users.sort(
(a,b)=>b.xp-a.xp
);

const container =
document.getElementById(
"leaderboardList"
);

users.forEach((user,index)=>{

let medal = "";

if(index === 0)
medal = "🥇";

else if(index === 1)
medal = "🥈";

else if(index === 2)
medal = "🥉";

container.innerHTML += `

<div class="player">

<div>

<span class="rank">
${medal || "#" + (index+1)}
</span>

${user.name}

</div>

<div class="xp">
${user.xp} XP
</div>

</div>

`;

});