
/* OFFICIAL FOOTER FUNCTIONALITY */

(() => {
  "use strict";

  // Automatic copyright year
  const year = document.getElementById("pfYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Footer navigation
  document.querySelectorAll("[data-footer-action]")
    .forEach(link => {

      link.addEventListener("click", event => {
        event.preventDefault();

        const action = link.dataset.footerAction;

        if (action === "home") {
          document.getElementById("s-home")
            ?.scrollIntoView({ behavior: "smooth" });
        }

        if (action === "sets") {
          document.getElementById("cards")
            ?.scrollIntoView({ behavior: "smooth" });
        }

        if (action === "police") {
          document.getElementById("cards2")
            ?.scrollIntoView({ behavior: "smooth" });
        }

        if (action === "feedback") {
          document.getElementById("pfOpen")?.click();
        }
      });

    });

})();
