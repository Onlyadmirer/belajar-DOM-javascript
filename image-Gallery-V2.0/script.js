const mainImg = document.querySelector('.main-img');
const caption = document.querySelector('.img-caption');
const smallImg = document.querySelectorAll('.img-small');


const thum = document.querySelector('.thumbnail');

function defaultImg(active) {
  smallImg.forEach(img => {
    const util = img.closest('.img-util');

    if (util) {
      if (img === active) {
        util.classList.add('ring-2', 'ring-[#d9eff7]', 'scale-103');
      } else {
        util.classList.remove('ring-2', 'ring-[#d9eff7]', 'scale-103');
      };
    };
  });
};

const urlUtama = mainImg.getAttribute('src');
smallImg.forEach(img => {
  const urlChild = img.getAttribute('src');

  if (urlUtama == urlChild) {
    defaultImg(img);
  }
})

thum.addEventListener('click', function(e) {
  if ( e.target.classList.contains('img-small') ) {
    const cliked = e.target;
    const pickCaption = e.target.dataset.caption;

    mainImg.classList.add('opacity-10');
    caption.classList.add('opacity-10');

    defaultImg(cliked);

    setTimeout(() => {
      mainImg.src = e.target.src;
      caption.innerHTML = pickCaption
      
      mainImg.classList.remove('opacity-10');
      caption.classList.remove('opacity-10');
    }, 300);

    e.preventDefault();
  };

});