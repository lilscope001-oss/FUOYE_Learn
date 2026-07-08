const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
}

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}

async function handleSignup(event) {
    event.preventDefault();

    if (!signupForm) return;

    const name = document.getElementById("name").value.trim();
    const matric = document.getElementById("matric").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !matric || !email || !password) {
        showError(signupError, "Please fill out all fields.");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        showError(signupError, error.message || "Signup failed.");
        return;
    }

    const userRecord = {
        id: data.user?.id,
        name,
        matric,
        email,
        xp: 0,
        streak: 0,
        badges: [],
        level: "100L",
        created_at: new Date().toISOString(),
    };

    const { error: insertError } = await insertUser(userRecord);

    if (insertError) {
        showError(signupError, insertError.message || "Could not create user record.");
        return;
    }

    window.location.href = "login.html";
}

async function handleLogin(event) {
    event.preventDefault();

    if (!loginForm) return;

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        showError(loginError, "Please enter both email and password.");
        return;
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        showError(loginError, error.message || "Login failed.");
        return;
    }

    window.location.href = "index.html";
}

function showError(element, message) {
    if (!element) return;
    element.innerText = message;
}
