const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const HOUSING_PHOTO_WIDTH = '70';
const HOUSING_PHOTO_HEIGHT = '70';
const HOUSING_PHOTO_ALT_TEXT = 'Фото жилья';

const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserHousingPhoto = document.querySelector('#images');
const previewHousingPhotoBlock = document.querySelector('.ad-form__photo');

fileChooserAvatar.addEventListener('change', () => {
  const fileAvatar = fileChooserAvatar.files[0];
  const fileAvatarName = fileAvatar.name.toLowerCase();
  const matchesAvatar = FILE_TYPES.some((it) => fileAvatarName.endsWith(it));
  if (matchesAvatar) {
    const readerAvatar = new FileReader();
    readerAvatar.addEventListener('load', () => previewAvatar.src = readerAvatar.result);
    readerAvatar.readAsDataURL(fileAvatar);
  }
});

fileChooserHousingPhoto.addEventListener('change', () => {
  const fileHousingPhoto = fileChooserHousingPhoto.files[0];
  const fileHousingPhotoName = fileHousingPhoto.name.toLowerCase();
  const matchesHousingPhoto = FILE_TYPES.some((it) => fileHousingPhotoName.endsWith(it));
  if (matchesHousingPhoto) {
    const readerHousingPhoto = new FileReader();
    readerHousingPhoto.addEventListener('load', () => {
      const previewHousingPhoto = document.createElement('img');
      previewHousingPhoto.width = HOUSING_PHOTO_WIDTH;
      previewHousingPhoto.height = HOUSING_PHOTO_HEIGHT;
      previewHousingPhoto.alt = HOUSING_PHOTO_ALT_TEXT;
      previewHousingPhoto.src = readerHousingPhoto.result;
      previewHousingPhotoBlock.appendChild(previewHousingPhoto);
    });
    readerHousingPhoto.readAsDataURL(fileHousingPhoto);
  }
});
