<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Signup | FUOYE Learn</title>

<link rel="stylesheet" href="css/style.css">

<style>

.auth-container{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#FAF8F2;
}

.auth-card{
    width:100%;
    max-width:450px;
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.auth-logo{
    text-align:center;
    color:#3FAF7A;
    font-size:30px;
    font-weight:bold;
    margin-bottom:20px;
}

.auth-title{
    text-align:center;
    margin-bottom:20px;
}

.form-group{
    margin-bottom:15px;
}

.form-group label{
    display:block;
    margin-bottom:5px;
}

.form-control{
    width:100%;
    padding:12px;
    border:1px solid #ddd;
    border-radius:8px;
}

.btn-auth{
    width:100%;
    background:#3FAF7A;
    color:white;
    border:none;
    padding:14px;
    border-radius:8px;
    cursor:pointer;
}

.btn-auth:hover{
    background:#2F8E63;
}

.auth-link{
    text-align:center;
    margin-top:15px;
}

.auth-link a{
    color:#3FAF7A;
    text-decoration:none;
}

.error-message{
    color:red;
    text-align:center;
    margin-bottom:10px;
}

</style>

</head>
<body>

<div class="auth-container">

<div class="auth-card">

<div class="auth-logo">
FUOYE Learn
</div>

<h2 class="auth-title">
Create Account
</h2>

<div id="signupError" class="error-message"></div>

<form id="signupForm">

<div class="form-group">
<label>Full Name</label>
<input
type="text"
id="name"
class="form-control"
required>
</div>

<div class="form-group">
<label>Matric Number</label>
<input
type="text"
id="matric"
class="form-control"
required>
</div>

<div class="form-group">
<label>Email</label>
<input
type="email"
id="email"
class="form-control"
required>
</div>

<div class="form-group">
<label>Password</label>
<input
type="password"
id="password"
class="form-control"
required>
</div>

<button class="btn-auth">
Create Account
</button>

</form>

<div class="auth-link">
Already have an account?
<a href="login.html">Login</a>
</div>

</div>

</div>

<script src="js/auth.js"></script>

</body>
</html>