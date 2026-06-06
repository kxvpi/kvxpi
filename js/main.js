document.addEventListener('DOMContentLoaded', function() {
  // simple reveal animation for timeline
  document.querySelectorAll('.career-point').forEach(function(el, idx) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(function() {
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 * idx);
  });

  // set current year in footer if present
  var footer = document.querySelector('footer');
  if (footer) {
    var year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(/\b2026\b/, year);
  }
});
