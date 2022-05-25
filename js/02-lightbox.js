import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery">
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        
        alt="${description}"
      />
    </a>
  </div>
 `
  )
  .join("");

gallery.innerHTML = galleryMarkup;



 const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
  });

