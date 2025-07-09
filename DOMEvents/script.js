// const p3 = document.querySelector('.p3');

// function klik() {
//   p3.style.backgroundColor = 'lightBlue';
// }


const p4 = document.querySelector('section#b p');


p4.addEventListener('click', () => {
  const ul = document.querySelector('section#b ul');
  const itemBaru = document.createElement('li');
  const isiItemBaru = document.createTextNode('item baru');

  itemBaru.appendChild(isiItemBaru);

  ul.append(itemBaru);

});

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', () => {
  p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('mouseleave', () => {
  p3.style.backgroundColor = 'lightgreen'
})
p3.addEventListener('click', () => {
  p3.style.backgroundColor = ''
})




