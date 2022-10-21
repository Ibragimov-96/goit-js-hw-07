import { galleryItems } from './gallery-items.js';
// Change code below this line
const palettContainer = document.querySelector(".gallery");
const imageMarkup = createMarkApp(galleryItems);
palettContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createMarkApp(galleryItems) {
  const markup = galleryItems
    .map(({ preview, description , original}) => {
      return `<div class ="gallery__item"><a class="gallery__link" href=${original}>
      <img class = "gallery__image" src="${preview}" alt="${description}" data-original= "${original}"></div>`;
    })
    .join("");
//   console.log("makup: ", markup);
  return markup;
}

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 250,
});
