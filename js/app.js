document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.navbar-collapse');
    if(nav.classList.contains('show')){
      new bootstrap.Collapse(nav).hide();
    }
  });
});
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".premium-nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".section-padding").forEach(section => {
  observer.observe(section);
});
