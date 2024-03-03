const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function pg4Animation() {
  var elem = document.querySelector("#elem-cont");
  var fix = document.querySelector("#fixed-image");

  elem.addEventListener("mouseenter", function () {
    fix.style.display = "block";
  });

  elem.addEventListener("mouseleave", function () {
    fix.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fix.style.backgroundImage = `url(${image})`;
    });
  });
}
pg4Animation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
  });
}
swiperAnimation();
function loader() {
  var loader = document.querySelector("#loader");

  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}

loader();
