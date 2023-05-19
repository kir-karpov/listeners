`use strict`;
const btn = document.querySelector(`#e_btn`)
const colorInput = document.getElementById(`text`)
const square = document.getElementById(`square`)
const circle = document.getElementById(`circle`)
const rangeInput = document.getElementById(`range`)
const rangeValue = document.getElementById(`range-span`);

btn.addEventListener(`click` , function () {
const color = colorInput.value;
square.style.backgroundColor = color;
});

circle.addEventListener(`mouseenter` , function () {
  circleButton.style.display = `block`;
});

circle.addEventListener(`mouseleave` , function () {
  circle.style.display = `none`;
  
})

rangeInput.addEventListener(`input`, function () {
  const value = rangeInput.value;
  const percentage = rangeInput.value + `%`;
  circle.style.width = percentage;
  circle.style.height = percentage;
  rangeValue.textContent = value;
})






