function goBack(event) {
  event.preventDefault();
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

async function logout() {
  await signOutUser();
  window.location.href = 'login.html';
}

function setupMobileMenus() {
  setupTopNavMenu();
  setupSidebarMenu();
}

function setupTopNavMenu() {
  const topNav = document.querySelector('.top-nav');
  const navLinks = topNav?.querySelector('.nav-links-inline');

  if (!topNav || !navLinks || topNav.querySelector('.mobile-menu-toggle')) return;

  const button = createMenuButton('Open navigation menu');
  topNav.insertBefore(button, navLinks);
  wireMenuButton(button, topNav, navLinks);
}

function setupSidebarMenu() {
  const sidebar = document.querySelector('.sidebar');
  const navLinks = sidebar?.querySelector('.nav-links');
  const logo = sidebar?.querySelector('.logo');

  if (!sidebar || !navLinks || sidebar.querySelector('.mobile-menu-toggle')) return;

  const button = createMenuButton('Open navigation menu');

  if (logo) {
    logo.insertAdjacentElement('afterend', button);
  } else {
    sidebar.insertBefore(button, navLinks);
  }

  wireMenuButton(button, sidebar, navLinks);
}

function createMenuButton(label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-menu-toggle';
  button.setAttribute('aria-label', label);
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML = `
    <span class="mobile-menu-icon">
      <i></i>
      <i></i>
      <i></i>
    </span>
    <strong>Menu</strong>
  `;
  return button;
}

function wireMenuButton(button, menuRoot, navLinks) {
  button.addEventListener('click', () => {
    const open = menuRoot.classList.toggle('mobile-nav-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menuRoot.classList.remove('mobile-nav-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', setupMobileMenus);
