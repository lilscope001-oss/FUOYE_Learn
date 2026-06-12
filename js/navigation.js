function goBack(event) {
  event.preventDefault();
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

function logout() {
  localStorage.removeItem('fuoye_current_user');
  window.location.href = 'login.html';
}
