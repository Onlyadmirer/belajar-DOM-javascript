const semuaTombol = document.querySelectorAll('.add-to-cart');

    let i = 0;

semuaTombol.forEach(function(tombol) {
  tombol.addEventListener('click', function(event) {
    const tombolYangDiklik = event.target;

    const parent = tombolYangDiklik.parentElement;

    const namaProduk = parent.dataset.name;
    const hargaProduk = parent.dataset.price;

    const produk = document.createElement('li');
    produk.textContent = `${namaProduk} - Rp ${hargaProduk}`;
    const cart = document.getElementById('cart-items');
    cart.appendChild(produk);

    const total = document.getElementById('total-price');
    const hargaProdukAngka = parseInt(hargaProduk);

    i += hargaProdukAngka;
    total.textContent = `${i}`;
  });
  
})


