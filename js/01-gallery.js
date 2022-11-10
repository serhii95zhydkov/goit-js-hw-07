import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGalleryItems = ({preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;

const refs = {
    gallery: document.querySelector(`.gallery`),
};

const listGalleryItems = galleryItems.map((item) => getGalleryItems(item)).join(``);

refs.gallery.insertAdjacentHTML(`beforeend`, listGalleryItems);

console.log(galleryItems);
