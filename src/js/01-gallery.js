import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryContainerRef = document.querySelector('.gallery');

//1.Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.

const markupGallery = galleryItems
  .map(
    ({
      original,
      preview,
      description,
    }) => `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
  )
  .join('');

galleryContainerRef.insertAdjacentHTML('afterbegin', markupGallery);

//2.Ініціалізація бібліотеки після створення і додання елементів галереї

const lightbox = new SimpleLightbox('.gallery a', {
  //3.додай відображення підписів до зображень з атрибута alt. Нехай підпис буде
  //знизу і з'являється через 250 мілісекунд після відкриття зображення.

  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
