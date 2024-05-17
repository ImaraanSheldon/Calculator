document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.keys button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('number') || button.classList.contains('operator') || button.classList.contains('decimal')) {
          display.value += button.textContent;
        } else if (button.classList.contains('clear')) {
          display.value = '';
        } else if (button.classList.contains('equal')) {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        }
      });
    });
  });