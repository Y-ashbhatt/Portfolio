document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuIcon = document.querySelector('.mobile-menu');
  const mobileNavMenu = document.querySelector('.mobile-nav');

  mobileMenuIcon.addEventListener('click', function() {
      mobileNavMenu.classList.toggle('closed-menu');
  });

  // Close mobile menu when a menu item is clicked
  const mobileMenuItems = document.querySelectorAll('.mobile-nav ul li a');
  mobileMenuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          mobileNavMenu.classList.add('closed-menu');
      });
  });
  document.querySelector(".tabler-icon").addEventListener("click",function () {
    mobileNavMenu.classList.add('closed-menu');
  })
});
