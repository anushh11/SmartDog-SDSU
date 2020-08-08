//Selectors
let signupClick = document.querySelector('.signup-button');
let loginClick = document.querySelector('.login-button');

//Event Listeners
signupClick.addEventListener('click', computeSignup);
loginClick.addEventListener('click', computeLogin);


function computeSignup(event) {
  event.preventDefault();

  let x = document.getElementById('login');
  let y = document.getElementById('signup');

  x.style.left = "-300px";
  y.style.left = "720px";
  console.log("Sign up click");
}

function computeLogin() {
  let x = document.getElementById('login');
  let y = document.getElementById('signup');

  x.style.left = "80px";
  y.style.left = "-300px";
  console.log("Log in click");
}

function navSlide() {
  console.log("Nav click");
  navLinks.classList.toggle("nav-active");
}
