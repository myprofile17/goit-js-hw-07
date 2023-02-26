import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(createGalleryItems(galleryItems));

const itemsContainer = document.querySelector(".gallery");

const galleryNewItems = createGalleryItems(galleryItems);

itemsContainer.insertAdjacentHTML("afterbegin", galleryNewItems);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

itemsContainer.addEventListener("click", onItemsContainerClick);

function onItemsContainerClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${selectedImg}" alt ="images">
`);

  instance.show();
}
