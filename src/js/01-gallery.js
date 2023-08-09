import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";  

const gallery = document.querySelector(".gallery")

const app = galleryItems.map(({ preview, original, description }) => {
    const element =`
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    
    return element
}).join("")

gallery.insertAdjacentHTML("beforeend", app)

new SimpleLightbox('.gallery__item a', { captionsData: "alt", captionDelay: 250 });
