var a = document.querySelectorAll("h1");
// console.log(a);

a.forEach(function (e) {
  console.log(e);
});

var a = document.querySelector("#center");

var btn = document.querySelector("button");

var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    a.style.background = "yellow";
    console.log("I am ON");
    flag = 1;
  } else {
    a.style.background = "white";
    console.log("I am off");
    flag = 0;
  }
});
