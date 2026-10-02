// 좌/우 방향키로도 페이지를 이동할 수 있다.
document.addEventListener("keydown", function (e) {
  var target = null;
  if (e.key === "ArrowRight") target = document.querySelector("[data-next]");
  if (e.key === "ArrowLeft") target = document.querySelector("[data-prev]");
  if (target && target.getAttribute("href")) {
    window.location.href = target.getAttribute("href");
  }
});
