var SUPABASE_URL =
"https://dnscnpdxtjfmqladkyar.supabase.co";

var SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2NucGR4dGpmbXFsYWRreWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTYxNDksImV4cCI6MjA5ODkzMjE0OX0.XLBn1Cqc-V4_SI_GDFhp6a8i-QqAy4Qrk_MCmxJYO1M";

var supabaseClient =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

var ADMIN_EMAIL = "lilscope001@gmail.com";

async function getSessionUser() {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error || !data?.session?.user) {
        return null;
    }

    return data.session.user;
}

function isAdminUser(user) {
    return (
        user?.email?.toLowerCase() === ADMIN_EMAIL ||
        user?.app_metadata?.role === "admin" ||
        user?.user_metadata?.role === "admin"
    );
}

async function isCurrentSessionAdmin() {
    const user = await getSessionUser();
    return isAdminUser(user);
}

async function getCurrentUser() {
    const sessionUser = await getSessionUser();

    if (!sessionUser) return null;

    const { data, error } = await supabaseClient
        .from("users")
        .select("*")
        .eq("id", sessionUser.id)
        .single();

    if (!error) {
        const normalizedUser = normalizeUser(data, sessionUser);
        applyUserTheme(normalizedUser);
        return normalizedUser;
    }

    const createdUser = await createUserProfile(sessionUser);
    const user = createdUser
        ? normalizeUser(createdUser, sessionUser)
        : createFallbackUser(sessionUser);

    applyUserTheme(user);
    return user;
}

async function fetchAllUsers() {
    const { data, error } = await supabaseClient
        .from("users")
        .select("*");

    return error ? [] : (data || []).map(user => normalizeUser(user));
}

async function insertUser(userData) {
    const dbUser = toUserRow(userData);

    const { data, error } = await supabaseClient
        .from("users")
        .insert(dbUser)
        .select()
        .single();

    return { data, error };
}

async function updateUser(userId, changes) {
    const updates = toUserRow(changes);

    if (Object.keys(updates).length === 0) {
        return { data: null, error: null };
    }

    const { data, error } = await supabaseClient
        .from("users")
        .update(updates)
        .eq("id", userId);

    return { data, error };
}

function normalizeUser(user, sessionUser = null) {
    if (!user) return null;

    return {
        ...user,
        name: user.name || user.full_name || "Student",
        matric: user.matric || user.matric_number || "",
        email: user.email || sessionUser?.email || "",
        xp: user.xp || 0,
        streak: user.streak || 0,
        badges: user.badges || [],
        level: user.level || "100L",
        dark_mode: user.dark_mode === true,
    };
}

function createFallbackUser(sessionUser) {
    const metadata = sessionUser.user_metadata || {};
    const pendingProfile = getPendingProfile(sessionUser.email);

    return {
        id: sessionUser.id,
        name: pendingProfile.name || metadata.full_name || metadata.name || "Student",
        matric: pendingProfile.matric || metadata.matric_number || metadata.matric || "",
        email: sessionUser.email || "",
        xp: 0,
        streak: 0,
        badges: [],
        level: metadata.level || "100L",
        dark_mode: false,
        activity_history: [],
        profile_pending_sync: true,
    };
}

function toUserRow(userData) {
    const row = {};

    if (userData.id !== undefined) row.id = userData.id;
    if (userData.name !== undefined) row.full_name = userData.name;
    if (userData.full_name !== undefined) row.full_name = userData.full_name;
    if (userData.matric !== undefined) row.matric_number = userData.matric;
    if (userData.matric_number !== undefined) row.matric_number = userData.matric_number;
    if (userData.level !== undefined) row.level = userData.level;
    if (userData.department !== undefined) row.department = userData.department;
    if (userData.xp !== undefined) row.xp = userData.xp;
    if (userData.streak !== undefined) row.streak = userData.streak;
    if (userData.badges !== undefined) row.badges = userData.badges;
    if (userData.dark_mode !== undefined) row.dark_mode = userData.dark_mode;

    return row;
}

async function createUserProfile(sessionUser) {
    const metadata = sessionUser.user_metadata || {};
    const pendingProfile = getPendingProfile(sessionUser.email);

    const userRecord = {
        id: sessionUser.id,
        name: pendingProfile.name || metadata.full_name || metadata.name || "Student",
        matric: pendingProfile.matric || metadata.matric_number || metadata.matric || "",
        level: metadata.level || "100L",
        department: metadata.department || "Computer Science",
        xp: 0,
        streak: 0,
        badges: [],
    };

    const { data, error } = await insertUser(userRecord);

    if (error) {
        console.error("Could not create user profile", error);
        return null;
    }

    clearPendingProfile(sessionUser.email);
    return data;
}

function savePendingProfile(email, profile) {
    if (!email) return;
    localStorage.setItem(`fuoye_pending_profile_${email}`, JSON.stringify(profile));
}

function getPendingProfile(email) {
    if (!email) return {};

    try {
        return JSON.parse(localStorage.getItem(`fuoye_pending_profile_${email}`)) || {};
    } catch (error) {
        return {};
    }
}

function clearPendingProfile(email) {
    if (!email) return;
    localStorage.removeItem(`fuoye_pending_profile_${email}`);
}

async function updateUserDatabase(updatedUser) {
    if (!updatedUser?.id) {
        return { data: null, error: new Error("Missing user id.") };
    }

    return updateUser(updatedUser.id, {
        name: updatedUser.name,
        xp: updatedUser.xp,
        streak: updatedUser.streak,
        badges: updatedUser.badges,
        level: updatedUser.level,
        matric: updatedUser.matric,
    });
}

async function deleteUser(userId) {
    const { data, error } = await supabaseClient
        .from("users")
        .delete()
        .eq("id", userId);

    return { data, error };
}

async function signOutUser() {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
}

function applyUserTheme(user) {
    const savedTheme = getSavedTheme(user?.id);
    const enabled = savedTheme !== null ? savedTheme : user?.dark_mode === true;

    document.body.classList.toggle("dark-mode", enabled);
    document.documentElement.classList.toggle("dark-mode", enabled);
}

function getSavedTheme(userId) {
    const userValue = userId ? localStorage.getItem(`fuoye_dark_mode_${userId}`) : null;
    const globalValue = localStorage.getItem("fuoye_dark_mode");
    const value = userValue !== null ? userValue : globalValue;

    if (value === null) return null;
    return value === "true";
}

function saveThemePreference(userId, enabled) {
    localStorage.setItem("fuoye_dark_mode", enabled ? "true" : "false");

    if (userId) {
        localStorage.setItem(`fuoye_dark_mode_${userId}`, enabled ? "true" : "false");
    }

    document.body.classList.toggle("dark-mode", enabled);
    document.documentElement.classList.toggle("dark-mode", enabled);
}

(function applyInitialTheme() {
    const enabled = getSavedTheme(null);

    if (enabled !== null) {
        document.documentElement.classList.toggle("dark-mode", enabled);
        if (document.body) document.body.classList.toggle("dark-mode", enabled);
    }
})();
