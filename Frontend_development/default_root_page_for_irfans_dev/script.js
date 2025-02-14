function loader() {
  const loaderPage = document.querySelector("#loader");
  setTimeout(function () {
    loaderPage.style.top = "-100%";
  }, 5000);
}

loader();
