// === MEGA MENU TOUCH SUPPORT ===
document.querySelectorAll('.has-dropdown').forEach(item=>{
  item.addEventListener('touchstart', function(){
    this.querySelector('.dropdown-menu').style.display = 'block';
  });
});