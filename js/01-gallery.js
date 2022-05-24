import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onZoomImg); 




const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
  
gallery.innerHTML = galleryMarkup; 

function onZoomImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  toggleGalleryModal();
 
  };
 
function toggleGalleryModal() {
  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);
  instance.show();
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
    gallery.removeEventListener("keydown", event);
    console.log("key: ", event.key);
    console.log("code: ", event.code);
  });
};









