const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const nuberOfSlides = slides.length;
var slideNumber = 0;


//next button

nextBtn.addEventListener("click", () =>
{

     slides.forEach((slide) => 
      {
      slide.classList.remove("active");
     })

     slideIcons.forEach((slideIcons) => 
      {
      slideIcons.classList.remove("active");
     })

    slideNumber++;

    if(slideNumber > (nuberOfSlides - 1))
    {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})


//prec button

prevBtn.addEventListener("click", () =>
{

    slides.forEach((slide) => 
    {
    slide.classList.remove("active");
   })

   slideIcons.forEach((slideIcons) => 
    {
    slideIcons.classList.remove("active");
   })

  slideNumber--;

  if(slideNumber < 0)
  {
      slideNumber = nuberOfSlides - 1;
  }
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");

})