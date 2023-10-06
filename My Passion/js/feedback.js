/*Function Name: myFormValid 
This function will validate the email format, that we you enter a wrong email format,
it will show an alert message telling you to enter a valid email
and when the email format is right, it will show an alert telling successful and open the email window for you.*/
//Give feedback when click the submit button
let form = document.getElementById("form-id");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let x = document.getElementById("email").value;
  var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
  //check the email format
  if (myReg.test(x)) {
    alert("Successful, Thank you!");
    window.open('mailto:');

  } else {
    // perform operation with form input wrong
    alert("Please enter a valid email address, such as name@example.com.");
  }

});



