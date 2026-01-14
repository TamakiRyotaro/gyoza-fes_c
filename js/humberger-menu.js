  const menuIcon = document.querySelector('.c-header__hamburger-menu');
  const content = document.querySelector('.l-hamberger-content');

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('open-menu');
    content.classList.toggle('open-menu');
  });