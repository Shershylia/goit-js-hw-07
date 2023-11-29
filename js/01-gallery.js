import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));


function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </li>`
        )
        .join("");
}

list.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
if (event.target === event.currentTarget) {
    return;
}
    const liClick = event.target.closest(".gallery__item");
    console.log(liClick);


    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show()
    
function closeModalEsp(event) {
    if (event.key === "Escape") {
    instance.close();
  }
}
document.addEventListener("keydown", closeModalEsp);

  
}

// function closeModalEsp(event) {
//     if (event.key === "Escape") {
//     instance.close();
//   }
// }
// document.addEventListener("keydown", closeModalEsp);
