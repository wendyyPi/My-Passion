/* To make a responsible navigation when scale the website. Toggle between adding 
and removing the "responsive" class to topnav when the user clicks on the icon */
function myResponsiveMenu() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Function Name: myImageModal 
This function add a modal for growth path images that when you click on the images in Growth path, 
it will show a popup window showing the image and its label, to help user see the image more clear. */

// Get the modal, references to the modal
function myImageModal() {
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  var images = document.getElementsByClassName("cat-growth-img");

  //the image in the modal
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  // Go through all of the images with our custom class
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function (evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function shareOnFacebook(event) {
  event.preventDefault();
  var currentPageURL = window.location.href;
  var facebookShareURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentPageURL);
  window.open(facebookShareURL, "_blank");
}