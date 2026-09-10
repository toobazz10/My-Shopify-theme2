// === MOBILE MENU + DROPDOWN FIXES ===
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if(toggle && mainNav){
    toggle.addEventListener('click', function(){
      mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Touch support for dropdowns
  document.querySelectorAll('.has-dropdown').forEach(item=>{
    item.addEventListener('touchstart', function(e){
      e.preventDefault();
      const menu = this.querySelector('.dropdown-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });
});