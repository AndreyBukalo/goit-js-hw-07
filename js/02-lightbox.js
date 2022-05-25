import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onZoomImg);

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        
        alt="${description}"
      />
    </a>

 `
  )
  .join("");

gallery.innerHTML = galleryMarkup;
console.log(galleryItems);
function onZoomImg(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
      return;
      
  }   console.log("This is image");
toggleGalleryModal();
}


function toggleGalleryModal() {
new SimpleLightbox(".gallery__item a", {
  href,
});
}
  

