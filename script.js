// Adds a border under the nav once the page is scrolled. That is all the JS
// this site needs; everything else is CSS.
(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function update() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
})();
