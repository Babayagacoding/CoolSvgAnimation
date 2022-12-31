const MainSvg = document.getElementById("MainSvg");
MainSvg.addEventListener("mouseover", function () {
  MainSvg.style.transition = "all 2s ease";
  MainSvg.style.transitionDelay = "5s";
  MainSvg.style.backgroundColor = "rgba(0, 0, 0, 1)";
});
MainSvg.addEventListener("mouseout", function () {
  MainSvg.style.transition = "all 2s ease";
  MainSvg.style.backgroundColor = "white";
});
