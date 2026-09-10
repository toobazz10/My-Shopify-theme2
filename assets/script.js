// === ✅ SAFE COUNTDOWN — FIXED NaN ERROR ===
document.addEventListener('DOMContentLoaded', function(){
  const countdownEl = document.querySelector('.countdown');
  if(!countdownEl) return;

  const endDateAttr = countdownEl.dataset.end;
  const endDate = new Date(endDateAttr).getTime();

  if(isNaN(endDate)){
    console.warn("Invalid countdown date — check format YYYY-MM-DD");
    return;
  }

  const timer = setInterval(function(){
    const now = new Date().getTime();
    const diff = endDate - now;

    if(diff <= 0){
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dd').innerText = days.toString().padStart(2,'0');
    document.getElementById('hh').innerText = hours.toString().padStart(2,'0');
    document.getElementById('mm').innerText = minutes.toString().padStart(2,'0');
    document.getElementById('ss').innerText = seconds.toString().padStart(2,'0');
  }, 1000);
});

// === MEGA MENU TOUCH SUPPORT ===
document.querySelectorAll('.has-mega-menu').forEach(item=>{
  item.addEventListener('touchstart', function(){
    this.querySelector('.mega-menu').style.display = 'block';
  });
});