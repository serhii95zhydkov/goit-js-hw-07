import { galleryItems } from './gallery-items.js';
// Change code below this line

const modal = (modalImageSrc) => {
  const instance = basicLightbox.create(`
    <img src=${modalImageSrc} />`);

  const onEscapePress = (event) => {
    if (event.code === "Escape") {
      instance.close();
  };
  };

  window.addEventListener("keydown", onEscapePress);
  
  return instance;
}; 

const refs = {
  gallery: document.querySelector(`.gallery`),
};

const getGalleryItems = ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;

const listGalleryItems = galleryItems.map((item) => getGalleryItems(item)).join(``);

refs.gallery.insertAdjacentHTML(`beforeend`, listGalleryItems);

const onClickOpenModal = (event) => {
  event.preventDefault();
  
  if (!event.target.classList.contains("gallery__image")) {
    return;
  };

  const modalImageSrc = event.target.dataset.source;

  modal(modalImageSrc).show();
};

refs.gallery.addEventListener("click", onClickOpenModal);

console.log(galleryItems);