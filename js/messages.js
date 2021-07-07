import {isEscEvent} from './utils.js';

const templateMessageSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');
const messageSuccessSendData = templateMessageSuccess.cloneNode(true);
const templateMessageError = document.querySelector('#error')
  .content
  .querySelector('.error');
const messageErrorSendData = templateMessageError.cloneNode(true);
const messageErrorGetData = templateMessageError.cloneNode(true);

const onDocumentMessageErrorGetKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.body.removeChild(messageErrorGetData);
    document.removeEventListener('keydown', onDocumentMessageErrorGetKeydown);
  }
};
const onMessageErrorGetClick = () => {
  document.body.removeChild(messageErrorGetData);
  document.removeEventListener('keydown', onDocumentMessageErrorGetKeydown);
};
const getMessageErrorGetData = () => {
  messageErrorGetData.querySelector('.error__message').textContent = 'При загрузке данных с сервера произошла ошибка, просмотр похожих объявлений будет не доступен. При этом размещение объявлений доступно. Для устранения неполадки попробуйте перезагрузить страницу.';
  document.body.appendChild(messageErrorGetData);
  messageErrorGetData.addEventListener('click', onMessageErrorGetClick);
  document.addEventListener('keydown', onDocumentMessageErrorGetKeydown);
};

const onDocumentMessageSuccessKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.body.removeChild(messageSuccessSendData);
    document.removeEventListener('keydown', onDocumentMessageSuccessKeydown);
  }
};
const onDocumentMessageSuccessClick = () => {
  document.body.removeChild(messageSuccessSendData);
  document.removeEventListener('keydown', onDocumentMessageSuccessKeydown);
};
const getMessageSuccess = () => {
  document.body.appendChild(messageSuccessSendData);
  messageSuccessSendData.addEventListener('click', onDocumentMessageSuccessClick);
  document.addEventListener('keydown', onDocumentMessageSuccessKeydown);
};

const onDocumentMessageErrorSendKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.body.removeChild(messageErrorSendData);
    document.removeEventListener('keydown', onDocumentMessageErrorSendKeydown);
  }
};
const onDocumentMessageErrorSendClick = () => {
  document.body.removeChild(messageErrorSendData);
  document.removeEventListener('keydown', onDocumentMessageErrorSendKeydown);
};
const getMessageErrorSendData = () => {
  document.body.appendChild(messageErrorSendData);
  messageErrorSendData.addEventListener('click', onDocumentMessageErrorSendClick);
  document.addEventListener('keydown', onDocumentMessageErrorSendKeydown);
};

export {getMessageErrorGetData,getMessageSuccess, getMessageErrorSendData};
