// DOM selection
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()


// =====================================================================
//                         DOM Manipulation
// =====================================================================

// -------------------- appendChild() => append() -------------------
// buat elemen baru
// appendChild()
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('paragraf baru');

// simpan tulisan kedalam paragraf
pBaru.append(textPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.append(pBaru);

// -------------------- insertBefore() => before() ------------------
// insertBefore()
const itemBaru = document.createElement('li');
const textItemBaru = document.createTextNode('item baru');

itemBaru.append(textItemBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)'); 
li2.before(itemBaru);

// ----------------------- removeChild() => remove() -----------------

const linkA = sectionA.querySelector('a');

linkA.remove(linkA);


// ----------------------- replaceChild() => replaceWith() -----------------

const p3 = sectionA.querySelector('p:nth-child(3)');
const pPengganti = document.createElement('p');
const isiPengganti = document.createTextNode('Paragraf pengganti');

pPengganti.appendChild(isiPengganti);

p3.replaceWith(pPengganti);


// ---------------- Filter yang sudah dirubah ---------------
pPengganti.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
itemBaru.style.backgroundColor = 'lightgreen';

// =========================================================================
// =====================================================================
