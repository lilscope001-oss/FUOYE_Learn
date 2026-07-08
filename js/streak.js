async function updateStreak() {
    const user = await getCurrentUser();

    if (!user) return;

    const today = new Date().toDateString();
    const lastVisit = user.last_visit;

    if (lastVisit !== today) {
        user.streak = (user.streak || 0) + 1;
        user.xp = (user.xp || 0) + 20;
        user.last_visit = today;

        await updateUser(user.id, {
            streak: user.streak,
            xp: user.xp,
            last_visit: user.last_visit,
        });
    }
}

updateStreak();