let appointForm = document.querySelector(".appointForm");
let msgElem = document.querySelector(".message");
let msgPhone = document.querySelector(".messagePhone");

// console.log(appointForm);
appointForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = event.currentTarget.username.value.trim();
  let usermail = event.currentTarget.usermail.value.trim();
  let phone = event.currentTarget.phone.value.trim();
  console.log(username, usermail, phone);

  if (phone.length < 11) {
    msgPhone.style.display = "block";
    msgPhone.textContent =
      "Username cannot be empty or less than 4 letters and Phone number should be greater than 10";
    msgPhone.classList.add("error");
    removeMessage();
    return;
  }

  if (username && usermail && phone) {
    msgElem.textContent = "You have succesfully Booked an Appointment";
    msgElem.style.display = "block";
    msgElem.classList.add("success");
    removeMessage();
  } else {
    msgElem.textContent = "Check your details again";
    msgElem.style.display = "block";
    msgElem.classList.add("error");
    removeMessage();
  }
});

function removeMessage() {
  setTimeout(() => {
    msgElem.style.display = "none";
    msgPhone.style.display = "none";
  }, "3000");
}

// //////////////////////////////////////

let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", dropDown);
function dropDown() {
  mobileNav.classList.toggle("toggle");
}
