let users = [];

const table = document.getElementById("userTable");
const adminMessage = document.getElementById("adminMessage");
const adminContent = document.getElementById("adminContent");

async function initAdmin() {
    const sessionUser = await getSessionUser();

    if (!sessionUser) {
        window.location.href = "login.html";
        return;
    }

    if (!isAdminUser(sessionUser)) {
        if (adminContent) adminContent.style.display = "none";
        if (adminMessage) {
            adminMessage.innerText = "You do not have permission to view this page.";
        }
        return;
    }

    users = await fetchAllUsers();
    renderUsers();
}

initAdmin();

function renderUsers(){
    table.innerHTML = "";

    users.forEach((user,index)=>{
        table.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.xp || 0}</td>
            <td>
                <button class="edit-btn" onclick="addXP(${index})">+50 XP</button>
                <button class="delete-btn" onclick="removeUser(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

async function addXP(index){
    const user = users[index];
    if (!user) return;

    const updatedXP = (user.xp || 0) + 50;
    await updateUser(user.id, { xp: updatedXP });
    await initAdmin();
}

async function removeUser(index){
    const user = users[index];
    if (!user) return;

    if (!confirm("Delete this user?")) return;

    await deleteUser(user.id);
    await initAdmin();
}
