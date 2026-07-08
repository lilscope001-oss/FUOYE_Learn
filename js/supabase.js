const SUPABASE_URL =
"https://dnscnpdxtjfmqladkyar.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2NucGR4dGpmbXFsYWRreWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTYxNDksImV4cCI6MjA5ODkzMjE0OX0.XLBn1Cqc-V4_SI_GDFhp6a8i-QqAy4Qrk_MCmxJYO1M";

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

async function getSessionUser() {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data?.session?.user) {
        return null;
    }

    return data.session.user;
}

async function getCurrentUser() {
    const user = await getSessionUser();

    if (!user) return null;

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

    return error ? null : data;
}

async function fetchAllUsers() {
    const { data, error } = await supabase
        .from("users")
        .select("*");

    return error ? [] : data || [];
}

async function insertUser(userData) {
    const { data, error } = await supabase
        .from("users")
        .insert(userData);

    return { data, error };
}

async function updateUser(userId, changes) {
    const updates = { ...changes };
    delete updates.id;

    const { data, error } = await supabase
        .from("users")
        .update(updates)
        .eq("id", userId);

    return { data, error };
}

async function deleteUser(userId) {
    const { data, error } = await supabase
        .from("users")
        .delete()
        .eq("id", userId);

    return { data, error };
}

async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    return { error };
}
