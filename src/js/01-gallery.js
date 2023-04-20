import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);

const galleryMarkup = createGallery(galleryItems);

function createGallery(item) {
return item.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    }).join('');
};

galleryEl.insertAdjacentHTML(`beforeend`, galleryMarkup);

new SimpleLightbox(
    '.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
}
);