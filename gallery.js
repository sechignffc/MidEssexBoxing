const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");
const image_gallery = document.querySelector(".image_gallery");
let image_list = [];
const images_url = "images.json";

fetch(images_url)
  .then((response) => response.json())
  .then((data) => {
    image_list = data;
    cGallery(image_list);
  });

function cGallery(images) {
  console.log(images);
  let curIndex = 0;
  const gallery = document.createElement("div");
  const curImage = document.createElement("img");
  curImage.setAttribute("src", "images/1000.jpg");
  const btn1 = document.createElement("button");
  btn1.textContent = "Prev";
  const btn2 = document.createElement("button");
  btn2.textContent = "Next";

  image_gallery.append(gallery);
  gallery.append(curImage);
  gallery.append(btn1);
  gallery.append(btn2);

  btn1.style.marginLeft = "4%";
  btn2.style.marginLeft = "1%";

  btn1.addEventListener("click", () => {
    curIndex--;
    if (curIndex < 0) {
      curIndex = images.length - 1;
    }
    curImage.src = `images/${images[curIndex]}`;
  });

  btn2.addEventListener("click", () => {
    curIndex++;
    if (curIndex >= images.length) {
      curIndex = 0;
    }
    curImage.src = `images/${images[curIndex]}`;
  });
}

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
