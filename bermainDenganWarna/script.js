const button = document.getElementById('button');


button.addEventListener('click', function() {
  const h1 = document.querySelector('h1');

  h1.classList.toggle('text-slate-300');
  document.body.classList = 'bg-[#252525] transition duration-300';

});

const buttonBaru = document.createElement('button');
const isiButtonBaru = document.createTextNode('Warna Random');
const divButton = document.querySelector('.flex');

buttonBaru.appendChild(isiButtonBaru);

buttonBaru.classList = 'font-semibold bg-teal-500 py-2 px-8 rounded-full text-white cursor-pointer mb-15 ';

buttonBaru.setAttribute('type', 'button');
divButton.append(buttonBaru);

buttonBaru.addEventListener('click', function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.classList = 'bg-[rgb(' + r + ',' + g + ',' + b + ')] transition duration-300'
});


const follower = document.getElementById('follower');

window.addEventListener('mousemove', function(e) {
  const posisiX = e.clientX;
  const posisiY = e.clientY;

  follower.style.transform = `translate(${posisiX - 20}px, ${posisiY - 20}px)`;
});
