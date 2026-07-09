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

    savePendingProfile(email, { name, matric });

    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
                matric_number: matric,
                level: "100L",
                department: "Computer Science",
            },
        },
    });

    if (error) {
        showError(signupError, error.message || "Signup failed.");
        return;
    }

    if (data.session && data.user) {
        const { error: insertError } = await insertUser({
            id: data.user.id,
            name,
            matric,
            level: "100L",
            department: "Computer Science",
            xp: 0,
            streak: 0,
            badges: [],
        });

        if (insertError) {
            showError(signupError, insertError.message || "Could not create user record.");
            return;
        }

        clearPendingProfile(email);
    }

    alert("Account created. Please check your email to confirm your account before logging in.");
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

    const { error } = await supabaseClient.auth.signInWithPassword({
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
