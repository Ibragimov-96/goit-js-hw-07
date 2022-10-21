import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
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

palettContainer.addEventListener('click', clickImage)

function clickImage (e){
    event.preventDefault()
    if(!e.target.classList.contains('gallery__image')){
        return
    } 
    const src = e.target.dataset.original
    const alt = e.target.alt
    console.log(src, alt)
   

    const instance = basicLightbox.create(`<img class = "gallery__image" src="${src}" alt="${alt}"}>`
    ,
    {
    onShow:()=>{
      window.addEventListener("keydown", closeModal(instance))
    },
    onClose:()=>{
      removeEventListener("keydown", closeModal(instance));}
    })



    instance.show()
    console.log(e)
}

function closeModal(instance){
  return function(e){
    if(e.code === "Escape"){
      instance.close();
      console.log(this)
    }
  }
}
