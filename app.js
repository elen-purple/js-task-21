const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const overlay = document.querySelector(".lightbox__overlay");
const closeBtn = document.querySelector(`[data-action="close-lightbox"]`);
const image = document.querySelector(".lightbox__image");

galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </li>`
  );
});

galleryList.addEventListener("click", (e) => {
  if (e.target === galleryList) {
    return;
  }
  image.src = e.target.dataset.source;
  image.alt = e.target.alt;
  lightbox.classList.add("is-open");
});

closeBtn.addEventListener("click", toggleLightbox);
overlay.addEventListener("click", toggleLightbox);
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    toggleLightbox();
  }
  if (lightbox.classList.contains("is-open")) {
    if (e.code === "ArrowRight") {
      const currentIndex = galleryItems.indexOf(
        galleryItems.find((item) => item.description === image.alt)
      );
      if (currentIndex + 1 < galleryItems.length) {
        image.src = galleryItems[currentIndex + 1].original;
        image.alt = galleryItems[currentIndex + 1].description;
      }
    }
    if (e.code === "ArrowLeft") {
      const currentIndex = galleryItems.indexOf(
        galleryItems.find((item) => item.description === image.alt)
      );
      if (currentIndex > 0) {
        image.src = galleryItems[currentIndex - 1].original;
        image.alt = galleryItems[currentIndex - 1].description;
      }
    }
  }
});

function toggleLightbox() {
  lightbox.classList.remove("is-open");
  image.src = "";
  image.alt = "";
}
