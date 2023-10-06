/* Here will show popup alert message, when users click on the breed of cat they might interest
which act as a label effect that can help them know which breed cat they clicked and then lead them to a
detailed page that tell them more information about the cat. */

//image map when clicked show alert message
document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id === "breed1") {
    alert("This is Norwegian Forest cat!");
  }
  else if (elem.id === "breed2") {
    alert("This is Chartreux cat!");
  }
  else if (elem.id === "breed3") {
    alert("This is Abyssinian cat!");
  }
})

/* Function Name: myPhotoSCroll  
This function help the user scroll from the four images when press the next/previous button*/
//For the photo gallery to scroll 
//The slideIndex variable is a marker for which image is being shown that is 
//when slideIndex is one, show the first picture.
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//changes the css to show/hide picture slides.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //takes the slideIndex and uses it to find the correct slide in the slides array, 
  //and sets its css display property to block to makes the image appear
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
}
