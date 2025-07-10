const buttons = document.querySelectorAll('.faq-question');

buttons.forEach(button => {

  button.addEventListener('click', () => {
    buttons.forEach(but => {
      if (but !== button){
        but.classList.remove('active');
        but.nextElementSibling.classList.remove('active');
      }
    });

    button.classList.toggle('active')
    button.nextElementSibling.classList.toggle('active');
  });
});