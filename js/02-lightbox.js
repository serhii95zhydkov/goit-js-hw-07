import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector(`.gallery`),
};

const getGalleryItems = ({ preview, original, description }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;

const listGalleryItems = galleryItems.map((item) => getGalleryItems(item)).join(``);

refs.gallery.insertAdjacentHTML(`beforeend`, listGalleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

console.log(galleryItems);