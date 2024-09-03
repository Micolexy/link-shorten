const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMsg = document.getElementById('error');

linkForm.addEventListener('submit', formSumbit);
// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

function formSumbit(e) {
  e.preventDefault()
  if (input.value ===  '') {
   errorMsg.innerHTML = 'please enter link';
   input.classList.add('border-red')
  }
  else if (!validURL(input.value)) {
    errorMsg.innerHTML = 'Please enter a valid url';
   input.classList.add('border-red')
  }
  else {
    errorMsg.innerHTML = '';
   input.classList.remove('border-red')
   alert('success')
  }
};
// toggle menu js
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle)

function navToggle() {
   btn.classList.toggle('open')
   menu.classList.toggle('flex')
   menu.classList.toggle('hidden')
}