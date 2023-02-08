const showBtn1 = document.querySelector(".btn1");
const showBtn2 = document.querySelector(".btn2");
const showBtn3 = document.querySelector(".btn3");
const hideBtn = document.querySelectorAll(".menu-btn1, .menu-btn2, .menu-btn3");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const btnOn = document.querySelectorAll('.btnOn1, .btnOn2, .btnOn3');

showBtn1.addEventListener("click", function () {
nav.style.transform = "translateX(0%)";
nav.style.visibility = "visible";
overlay.style.visibility = "visible";
overlay.style.opacity = "1";
btnOn[0].style.display = 'block';
btnOn[1].style.display = 'none';
btnOn[2].style.display = 'none';
});

showBtn2.addEventListener("click", function () {
nav.style.transform = "translateX(0%)";
nav.style.visibility = "visible";
overlay.style.visibility = "visible";
overlay.style.opacity = "1";
btnOn[0].style.display = 'none';
btnOn[1].style.display = 'block';
btnOn[2].style.display = 'none';
});

showBtn3.addEventListener("click", function () {
nav.style.transform = "translateX(0%)";
nav.style.visibility = "visible";
overlay.style.visibility = "visible";
overlay.style.opacity = "1";
btnOn[0].style.display = 'none';
btnOn[1].style.display = 'none';
btnOn[2].style.display = 'block';
});

hideBtn.forEach(function (btn) {
btn.addEventListener("click", function () {
nav.style.transform = "translateX(-100%)";
nav.style.visibility = "hidden";
overlay.style.visibility = "hidden";
overlay.style.opacity = "0";
});
});