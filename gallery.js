let GalleryImg = document.querySelector(".gallery-img");
let BackBtn = document.querySelector(".backbtn");
let NextBtn = document.querySelector(".nextbtn");
let btnopen = document.querySelector(".mobile-icon");
let closebtn = document.querySelector(".closebtn");
let navbar = document.querySelector(".nav-bar");
let likeview = document.querySelectorAll(".like-view");
let views = document.querySelectorAll(".view");
btnopen.addEventListener("click", () => {
  navbar.classList.toggle("navbar-mobile");
  closebtn.classList.add("mobile-icon");
  btnopen.classList.remove("mobile-icon");
  closebtn.classList.remove("noned");
  btnopen.classList.add("noned");
});
closebtn.addEventListener("click", () => {
  navbar.classList.toggle("navbar-mobile");
  btnopen.classList.add("mobile-icon");
  closebtn.classList.remove("mobile-icon");
  closebtn.classList.add("noned");
  btnopen.classList.remove("noned");
});
BackBtn.addEventListener("click", () => {
  GalleryImg.scrollLeft -= 900;
});
NextBtn.addEventListener("click", () => {
  GalleryImg.scrollLeft += 900;
});

let total = 0;
for (let i = 0; i < likeview.length; i++) {
  likeview[i].addEventListener("click", () => {
    let b = likeview[i].classList.toggle("colors");
    if (b == true) {
      let num = Number(views[i].innerText);

      total = num + 1;
      views[i].innerHTML = total;
    }
  });
}
