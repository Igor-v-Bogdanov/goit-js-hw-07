import { galleryItems } from "./gallery-items.js";
// Change code below this line
const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createPhotoGalleryMarkup(galleryItems);
cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// cardsContainer.addEventListener("click", onCardsContainerClick);

function createPhotoGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
              </li>
            `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
