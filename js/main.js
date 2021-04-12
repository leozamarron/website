function cambiarModo() {
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");
}
window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
      },
      responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 450,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 813,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }
  ]
  });
});
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});
btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 10000);
