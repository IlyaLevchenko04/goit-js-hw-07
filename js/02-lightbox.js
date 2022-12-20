import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerry = document.querySelector('.gallery');


 const markup = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`, '');
 galerry.insertAdjacentHTML('beforeend', markup);

 function image (evt) {
    let photo = evt.target;
    let i = galleryItems.find(({original}) => photo.dataset.source === original);
   
    evt.preventDefault();
    lightbox.open(i.original);
    document.addEventListener('keydown', (evt) => 
    {if(evt.key === 'Escape'){
        lightbox.close();
    }})
 }

 
 let lightbox = new SimpleLightbox('.gallery a',{ 
        captionsData: 'alt',
        captionPosition : 'bottom',
        captionDelay : 250
     });
galerry.addEventListener('click', image);

