import {isEscEvent} from './utils.js';

const templateMessageSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');
const messageSuccessSendData = templateMessageSuccess.cloneNode(true);
const templateMessageError = document.querySelector('#error')
  .content
  .querySelector('.error');
const messageErrorData = templateMessageError.cloneNode(true);

const onDocumentMessageSuccessKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.body.removeChild(messageSuccessSendData);
    document.removeEventListener('keydown', onDocumentMessageSuccessKeydown);
  }
};
const onMessageSuccessClick = () => {
  document.body.removeChild(messageSuccessSendData);
  document.removeEventListener('keydown', onDocumentMessageSuccessKeydown);
};
const getMessageSuccess = () => {
  document.body.appendChild(messageSuccessSendData);
  messageSuccessSendData.addEventListener('click', onMessageSuccessClick);
  document.addEventListener('keydown', onDocumentMessageSuccessKeydown);
};

const onDocumentMessageErrorKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.body.removeChild(messageErrorData);
    document.removeEventListener('keydown', onDocumentMessageErrorKeydown);
  }
};
const onMessageErrorClick = () => {
  document.body.removeChild(messageErrorData);
  document.removeEventListener('keydown', onDocumentMessageErrorKeydown);
};
const getMessageError = (messageText) => {
  messageErrorData.querySelector('.error__message').textContent = messageText;
  document.body.appendChild(messageErrorData);
  messageErrorData.addEventListener('click', onMessageErrorClick);
  document.addEventListener('keydown', onDocumentMessageErrorKeydown);
};

export {getMessageSuccess, getMessageError};
