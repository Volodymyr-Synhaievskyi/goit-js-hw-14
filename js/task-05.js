const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', event => {
  if (event.target.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.target.value;
  }
});