import { galleryItems } from "./gallery-items.js";
// Change code below this line

const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = createPhotoGalleryMarkup(galleryItems);
cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

cardsContainer.addEventListener("click", onCardsContainerClick);


function createPhotoGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
            `;
    })
    .join("");
}

function onCardsContainerClick(evt) {
  evt.preventDefault();
  const linkOnPhoto = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${linkOnPhoto}" width="1280" height="720">
  `);
  instance.show();
}

console.log(galleryItems);
