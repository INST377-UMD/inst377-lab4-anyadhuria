function helloName() {
    const name = document.getElementById('name').value;
    if (name) alert(`Hello ${name}`);
  }
function addText() {
  document.getElementById('header').textContent += ' Add Text';
}


function checkText() {
  const text = document.getElementById('text-input').value;
  const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validation.test(text)) {
    alert('No! the text has special charcters:(');
  }
}

let ogColor = document.body.style.backgroundColor;
let isogColor = true;
function changeColor() {
  document.body.style.backgroundColor = isogColor ? 'pink' : ogColor;
  isogColor = !isogColor;
}

  