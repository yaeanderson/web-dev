let darkModeSwitch = document.getElementById("dark-tog");
let darkNotif = document.getElementById("dark-key");
let isDarkMode = false;

function changeDarkMode(event) {
  
  //Change Background Color
  if (isDarkMode) document.body.style.backgroundColor = "white";
  else document.body.style.backgroundColor = "black";
  
  //Change Text Color
  if (isDarkMode) document.body.style.color="black";
  else document.body.style.color="white";
  
  //Change Mode Text
  if (isDarkMode) darkNotif.innerHTML = "<p>Dark Mode is off</p>";
  else darkNotif.innerHTML = "<p>Dark Mode is on</p>";
  
  //Change State Of Dark
  isDarkMode = !isDarkMode
}
