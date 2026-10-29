
document.addEventListener("DOMContentLoaded", function () {
  console.log("Nool Drops website loaded successfully!");

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
    }
  });
});
