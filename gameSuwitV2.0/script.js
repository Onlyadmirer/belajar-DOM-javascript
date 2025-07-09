function getplayeranComp() {
  const com = Math.random();

  if (com < 0.37) return 'semut';
  if (com >= 0.37 && com < 0.67) return 'orang';
  return 'gajah';
  
}

function putar() {
  const imgComp = document.querySelector('.computer-img');
  let gambar = ['gajah', 'orang', 'semut'];

  let i = 0;
  const waktu = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktu > 1000) {
      clearInterval;  
      return;
    }
      imgComp.setAttribute('src', '/gameSuwitV2.0/img/' + gambar[i++] + '.png')
      if (i == gambar.length) i = 0;
  }, 100);
}

function getHasil(com, player) {
  if (player == com) return 'seri';
  if (player == 'gajah') return (com == 'orang') ? 'menang' : 'kalah';
  if (player == 'orang') return (com == 'gajah') ? 'kalah' : 'menang';
  if (player == 'semut') return (com == 'gajah') ? 'menang' : 'kalah';
}




const scoreP = document.querySelector('.score-player');
const scoreC = document.querySelector('.score-comp');
let scorePlayer = 0;
let scoreComp = 0;
        


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(e) {
  e.addEventListener('click', function() {
    const pilihanComp = getplayeranComp();
    const pilihanPlayer = e.id;
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    
    putar();



    setTimeout(function() {
      const imgComp = document.querySelector('.computer-img');
      imgComp.setAttribute('src', '/gameSuwitV2.0/img/' + pilihanComp + '.png')
      const h1 = document.querySelector('.hasil');
      h1.innerHTML = hasil;

      if (hasil == 'kalah') {
          scoreComp++;
        } else if (hasil == 'menang') {
          scorePlayer++;
        }

        scoreP.innerHTML = scorePlayer;
        scoreC.innerHTML = scoreComp;
      
    }, 1000);
  });
});








// const pGajah = document.querySelector('#gajah');
// pGajah.addEventListener('click', function() {
//   const pilihanComp = getplayeranComp();
//   const pilihanPlayer = pGajah.id;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   const h1 = document.querySelector('.hasil');

//   const imgComp = document.querySelector('.computer-img');
//   imgComp.setAttribute('src', '/gameSuwitV2.0/img/' + pilihanComp + '.png')

//   h1.innerHTML = hasil;
// });

// const pOrang = document.querySelector('#orang');
// pOrang.addEventListener('click', function() {
//   const pilihanComp = getplayeranComp();
//   const pilihanPlayer = pOrang.id;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   const h1 = document.querySelector('.hasil');

//   const imgComp = document.querySelector('.computer-img');
//   imgComp.setAttribute('src', '/gameSuwitV2.0/img/' + pilihanComp + '.png')

//   h1.innerHTML = hasil;
// });

// const pSemut = document.querySelector('#semut');
// pSemut.addEventListener('click', function() {
//   const pilihanComp = getplayeranComp();
//   const pilihanPlayer = pSemut.id;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   const h1 = document.querySelector('.hasil');

//   const imgComp = document.querySelector('.computer-img');
//   imgComp.setAttribute('src', '/gameSuwitV2.0/img/' + pilihanComp + '.png')

//   h1.innerHTML = hasil;
// });