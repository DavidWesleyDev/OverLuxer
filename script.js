function clickEffect(element) {
  element.classList.add('clicked');
  setTimeout(() => {
    element.classList.remove('clicked');
  }, 300);
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}
