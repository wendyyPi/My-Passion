/* Function Name: myImageFilter 
This function can help the user filter the image grid into three different views like
one or two or four image in a row, that give user more option to choose the way 
they like for viewing a lot of images and add interaction */

//photo gallery add js filter function
// Get the elements with class="g2-column"
var elements = document.getElementsByClassName("g2-column");
// Declare a loop variable
var i;
// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}



