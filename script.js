
// Change navbar style on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
