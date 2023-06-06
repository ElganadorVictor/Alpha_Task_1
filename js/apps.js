const mobileMenu = document.querySelector(".mobile_nav");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#number");

function dropMenu() {
  mobileMenu.classList.toggle("show_mobile_nav");
}

function SubmitBtn() {
  alert(`you have succesfully created an account, ENJOY!`);
}

// function SubmitBtn() {
//   if (name == "Victor" && email == "ganad@gmail.com" && phone == 0122334455) {
//     alert("You have succefully booked an appointment. Thank you!");
//   } else {
//     ("Please check your details again");
//   }
// }
