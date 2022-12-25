import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerry = document.querySelector('.gallery');


 const markup = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`, '');
 galerry.insertAdjacentHTML('beforeend', markup);



 
  new SimpleLightbox('.gallery a',{ 
        captionsData: 'alt',
        captionPosition : 'bottom',
        captionDelay : 250
     });

