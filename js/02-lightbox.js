import { galleryItems } from "./gallery-items.js";
// Change code below this line

const itemsContainer = document.querySelector(".gallery");

const galleryNewItems = createGalleryItems(galleryItems);

itemsContainer.insertAdjacentHTML("afterbegin", galleryNewItems);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);
