async function updateStreak() {
    const user = await getCurrentUser();

    if (!user) return;

    const today = new Date().toDateString();
    const visitKey = `fuoye_last_visit_${user.id}`;
    const lastVisit = user.last_visit || localStorage.getItem(visitKey);

    if (lastVisit !== today) {
        user.streak = (user.streak || 0) + 1;
        user.xp = (user.xp || 0) + 20;
        user.last_visit = today;
        localStorage.setItem(visitKey, today);

        await updateUser(user.id, {
            streak: user.streak,
            xp: user.xp,
        });
    }
}

updateStreak();
