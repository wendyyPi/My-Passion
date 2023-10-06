/* Function Name: myAccordion 
This will create an accordion when you click on the block (the common health issue)
and it will expand more details about the issues */
//create accorditon for common health issue section
//get the document position
var acc = document.getElementsByClassName("accordion");
var i;
// loop through the accordion area, and when you click on it, 
// it will expand as a block and click again, it will disapper.
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}