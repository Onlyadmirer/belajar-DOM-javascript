var main = true;


while(main) {
  var pilih = prompt('silahkan pilih: Gajah, Semut, Orang');

  var com = Math.random();

  if (com < 0.37) {
    com = 'semut';
  } else if (0.37 <= com < 0.67) {
    com = 'orang';
  }else {
    com = 'gajah';
  }

  var hasil = '';
  if (pilih == com) {
    hasil = 'seri';
  }else if (pilih == 'gajah') {
    hasil = (com == 'orang') ? 'menang' : 'kalah';
  } else if (pilih == 'orang') {
    hasil = (com == 'gajah') ? 'kalah' : 'menang';
  } else if (pilih == 'semut') {
    hasil = (com == 'gajah') ? 'kalah' : 'menang';
  } else {
    hasil = 'masukkan pilihan yang valid';
  }

  if (hasil == 'kalah' || hasil == 'menang') {
    alert(`kamu memilih ${pilih}, computer memilih ${com}\n kamu ${hasil}`);
  } else {
    alert(hasil);
  }
}