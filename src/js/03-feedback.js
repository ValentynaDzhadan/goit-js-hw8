import { saveToLS, loadFromLS } from './helpers.js';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(foo, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  const formData = new FormData(e.target);
  const objectData = {};
  for (const [key, value] of formData) {
    objectData[key] = value;
  }
  console.log(objectData);
  e.target.reset();
}

function foo() {
  const obj = {};
  obj.email = formEl.elements.email.value;
  obj.message = formEl.elements.message.value;
  saveToLS('feedback-form-state', obj);
}

function onLoad() {
  const dataObject = loadFromLS('feedback-form-state');
  if (dataObject !== null) {
    formEl.elements.email.value = dataObject.email;
    formEl.elements.message.value = dataObject.message;
  }
}
onLoad();
