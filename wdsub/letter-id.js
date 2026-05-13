/*
//Loop Time Countdown
for (let _i = 0; _i < 5; _i++) {
  console.log("This is time " + _i + " of running this loop.");
}
*/

/*
//New Year Countdown
for (let _i = 10; _i > 0; _i--) {
  console.log(_i);
}

console.log("Happy New Year!");

//Other Way
for (let _i = 0; _i < 10; _i++) {
  console.log(10 - _i);
}

console.log("Happy New Year!");
*/

function iterateLetters() {
  let name = document.getElementById("input").value;
  for (let _i = 0; _i < name.length; _i++) {
    let ltr = name.substr(_i, 1);
    console.log("The Letter Of Your Name We Are On Is " + ltr + ".");
  }
}
