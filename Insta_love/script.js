var con = document.querySelector("#container");
var ico = document.querySelector("i");

con.addEventListener("dblclick", function () {
  ico.style.transform = "translate(-50%,-50%) scale(1)";
  ico.style.opacity = 0.8;
  setTimeout(function () {
    ico.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    ico.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1500);
});
