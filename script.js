document.getElementById("rightimg").onclick = function () {
  document.getElementById("mobile_version2").style.left = "0px";
  document.getElementById("rightimg").style.display = "none";
  document.getElementById("leftimg").style.display = "block";
  // document.getElementById("leftimg").style.left = "190px";
};
document.getElementById("leftimg").onclick = function () {
  document.getElementById("mobile_version2").style.left = "-120px";
  document.getElementById("leftimg").style.display = "none";
  document.getElementById("rightimg").style.display = "block";
  // document.getElementById("rightimg").style.left = "190px";
};

const toggleButton = document.getElementsByClassName("menu3")[0];
const navbarLinks = document.getElementsByClassName("navbar_ul3")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("action");
});
