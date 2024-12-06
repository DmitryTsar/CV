// MENU BURGER

const overlay = document.getElementById('overlay')
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuItem = document.querySelectorAll('.menu__item');

const isActive = function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const isActiveOverlay = overlay.classList.contains('_active');
    const isActiveMenuIcon = menuIcon.classList.contains('_active');
    const isActiveMenuBody = menuBody.classList.contains('_active');

    overlay.classList.toggle('_active', !isActiveOverlay);
    menuIcon.classList.toggle('_active', !isActiveMenuIcon);
    menuBody.classList.toggle('_active', !isActiveMenuBody);

    for ( let i = 0; i < menuItem.length; i++) {
      menuItem[i].onclick = isActive;
    }
  }
}

menuIcon.onclick = isActive;

// SCROLL

function scrollToTarget(event, targetId) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  const offset = 50;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}