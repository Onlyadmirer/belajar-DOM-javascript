const questions = document.querySelectorAll('.button');

questions.forEach(quest => {
  quest.addEventListener('click', event => {
    questions.forEach(q => {
      if (q !== quest) {
        q.classList.remove('active-button');
        q.nextElementSibling.classList.remove('active-p');
      }
    });

    event.target.nextElementSibling.classList.toggle('active-p');
    event.target.classList.toggle('active-button');
  });
});