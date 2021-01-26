console.log("Connected");
console.log(document.querySelector(".navbar"));
window.addEventListener("scroll", function () {
  if (window.scrollY > 20)
    document.querySelector(".navbar").classList.add("sticky");
  else document.querySelector(".navbar").classList.remove("sticky");
});
