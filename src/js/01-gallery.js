// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");

const markupCards = createGalleryCardsMarckup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", markupCards);

function createGalleryCardsMarckup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
              title="${description}"

            />
          </a>
        </li>`;
    })
    .join('');
}
    let gal = new SimpleLightbox('.gallery a');



// Change code below this line

