function goBack(event) {
  event.preventDefault();
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}
