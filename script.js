// const scriptURL = 'https://script.google.com/macros/s/AKfycbwCeMslNZ4kIo8KRaDPILoyoxc7WHS7m6mWrQWNBADQ67VCOfd0/exec'
// const sendEmail = 'https://script.google.com/macros/s/AKfycbwwc_EfSX2Ncb0hOfPCBJUsQlhc9OscuYc1BgP70bEnUAscBk131NfnGw/exec'
// const form = document.forms['google-sheet']
// const submit = document.getElementById("submit");

//Small menu
let menu_click = document.getElementById("menuOpener");
let menu = document.getElementById("mobile-nav");
var clicking = false;
menu_click.addEventListener('click', function () {
  if (clicking) {
    menu.classList.remove("clicked");
    clicking = false;
  } else {
    menu.classList.add("clicked");
    console.log("ok");
    clicking = true;
  }
})
window.addEventListener('touchmove', function () {
  menu.classList.remove("clicked");
  clicking = false;
})

submit.addEventListener('mousedown', function () {
  submit.style.backgroundColor = "#003399";
})
submit.addEventListener('touchstart', function () {
  submit.style.backgroundColor = "#003399";
})
submit.addEventListener('mouseup', function () {
  submit.style.backgroundColor = "#1d1e47";
})
submit.addEventListener('touchend', function () {
  submit.style.backgroundColor = "#1d1e47";
})
// submit.addEventListener('click', e => {
//   e.preventDefault()
//   if (document.getElementById('message').value.length !== 0) {
//     displayLoading();
//     fetch(scriptURL, { method: 'post', body: new FormData(form) })
//       .then(response => displaySent())
//       .catch(error => console.error('Error!', error.message))
//   }
// })
// window.onload = () => {
//   if (screen.width < 500) {
//     document.getElementById('topBackground').src = "pictures/_DSC4263.jpg";
//   }
// }




