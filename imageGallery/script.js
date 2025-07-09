const mainImg = document.querySelector('.main-img');
const caption = document.querySelector('.img-caption');

const thum = document.querySelector('.thumbnail');

thum.addEventListener('click', function(e) {
  if ( e.target.classList.contains('img-small') ) {
  const pickCaption = e.target.dataset.caption;

  mainImg.classList.add('opacity-10');
  caption.classList.add('opacity-10');

  setTimeout(() => {
    mainImg.src = e.target.src;
    caption.innerHTML = pickCaption
    
    mainImg.classList.remove('opacity-10');
    caption.classList.remove('opacity-10');
  }, 300);
  };

});