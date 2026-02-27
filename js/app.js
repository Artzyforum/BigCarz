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

// WhatsApp Enquiry Form
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name      = document.getElementById('name').value.trim();
  const phone     = document.getElementById('phone').value.trim();
  const email     = document.getElementById('email').value.trim();
  const fromPlace = document.getElementById('fromPlace').value.trim();
  const travelDate = document.getElementById('travelDate').value;
  const message   = document.getElementById('message').value.trim();

  const text =
    `*New Travel Enquiry – BigCarz*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `📍 *Enquiring From:* ${fromPlace}\n` +
    `📅 *Travel Date:* ${travelDate}\n` +
    `💬 *Message:* ${message}`;

  const url = `https://wa.me/919964104000?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});
