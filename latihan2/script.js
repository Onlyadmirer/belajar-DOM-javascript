const gambarUtama = document.getElementById('main-image');
const captionUtama = document.getElementById('image-caption');

const thumbnail = document.querySelectorAll('.thumbnail');

thumbnail.forEach(function(tombol) {
  tombol.addEventListener('click', function(event) {
    const gambarYangDipilih = event.target;
    const url = gambarYangDipilih.dataset.fullImage;
    const caption = gambarYangDipilih.dataset.caption;

    gambarUtama.src = url;
    captionUtama.textContent = caption;

    thumbnail.forEach(function(th){
      th.classList.remove('active');
    });
    gambarYangDipilih.classList.add('active');

    
  });
  
})
