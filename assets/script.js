// === COUNTDOWN TIMER ===
const countdown = document.querySelector('.countdown');
if(countdown){
  const endDate = new Date(countdown.dataset.end).getTime();
  const timer = setInterval(()=>{
    const now = new Date().getTime();
    const diff = endDate - now;
    if(diff < 0) { clearInterval(timer); return; }
    document.getElementById('d').innerText = Math.floor(diff/(1000*60*60*24));
    document.getElementById('h').innerText = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    document.getElementById('m').innerText = Math.floor((diff%(1000*60*60))/(1000*60));
    document.getElementById('s').innerText = Math.floor((diff%(1000*60))/1000);
  },1000);
}

// === MEGA MENU TOUCH SUPPORT ===
document.querySelectorAll('.has-mega-menu').forEach(item=>{
  item.addEventListener('touchstart', ()=>{
    item.querySelector('.mega-menu').style.display = 'block';
  });
});