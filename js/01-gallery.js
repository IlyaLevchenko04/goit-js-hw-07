import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerry = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, {preview, original, description}) => acc + `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`, '');
galerry.insertAdjacentHTML('beforeend', markup);



function image (evt){
    evt.preventDefault();
   
    let photo = evt.target;
    const i = galleryItems.find(({original}) => photo.dataset.source === original);
    var instance = basicLightbox.create(`<div class="modal"><img src = '${i.original}' alt = '${i.description}'></div>`,
    {
      onShow : () => {
        document.addEventListener('keydown', onEsc);
      },
      onClose : () => {
        document.removeEventListener('keydown', onEsc)
      }
    });
    function onEsc (evt) {
  if(evt.key === 'Escape'){
    instance.close();
}
}
    instance.show();    
}



galerry.addEventListener('click', image);
