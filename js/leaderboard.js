async function initLeaderboard() {
    const users = await fetchAllUsers();

    users.sort((a, b) => (b.xp || 0) - (a.xp || 0));

    const container =
document.getElementById(
"leaderboardList"
);

    users.forEach((user,index)=>{

let medal = "";

if(index === 0)
medal = `<img src="assets/icons/award-gold.svg" alt="" class="icon-rank">`;

else if(index === 1)
medal = `<img src="assets/icons/award-silver.svg" alt="" class="icon-rank">`;

else if(index === 2)
medal = `<img src="assets/icons/award-bronze.svg" alt="" class="icon-rank">`;

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

}

initLeaderboard();
