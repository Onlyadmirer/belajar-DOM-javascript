const allButtons = document.querySelectorAll('.tambah-ke-keranjang');

const total = document.getElementById('total-harga');
let hargaTotal = 0;

function totalHarga(){
  total.textContent = `${hargaTotal}`;

}


allButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const isClicked = event.target;

    const parent = isClicked.parentElement;

    const price = parent.dataset.harga;
    const productName = parent.dataset.nama;

    const newList = document.createElement('li');
    newList.dataset.harga = price;

    const cart = document.getElementById('keranjang-item-list');
    cart.append(newList);
    newList.innerHTML = `<span>${productName}</span><span>Rp ${price}</span><button class="hapus-item">X</button>`;


    const productPrice = parseInt(price);

    hargaTotal += productPrice;
    totalHarga();

  })

})

function deleteOrder() {
  const parentLi = document.getElementById('keranjang-item-list');

  parentLi.addEventListener('click', function(e) {

    if (e.target.classList.contains('hapus-item')) {
      const itemYangDihapus = e.target.parentElement;
      const dataHarga =  itemYangDihapus.dataset.harga;

      const hargaFinal = parseInt(dataHarga);

      hargaTotal -= hargaFinal;
      totalHarga();
      itemYangDihapus.remove();
    }
  })

}

deleteOrder();
totalHarga();