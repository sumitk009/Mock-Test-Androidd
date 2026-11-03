/* ======================================
   PREMIUM FEEDBACK SYSTEM
   Developer: Sumit Kumar
====================================== */

(() => {
  "use strict";

  const overlay = document.getElementById("pfOverlay");
  const openBtn = document.getElementById("pfOpen");
  const closeBtn = document.getElementById("pfClose");

  const ratingBox = document.getElementById("pfRating");
  const ratingText = document.getElementById("pfRatingText");
  const categoryBox = document.getElementById("pfCategories");

  const nameInput = document.getElementById("pfName");
  const emailInput = document.getElementById("pfEmail");
  const messageInput = document.getElementById("pfMessage");

  const count = document.getElementById("pfCount");

  const whatsappBtn = document.getElementById("pfWhatsApp");
  const emailBtn = document.getElementById("pfEmailBtn");

  if (!overlay || !openBtn || !closeBtn) return;

  let selectedRating = 0;
  let selectedCategory = "";

  const ratingLabels = {
    1: "Poor 😞",
    2: "Fair 😕",
    3: "Good 🙂",
    4: "Great 😊",
    5: "Excellent 🤩"
  };

  // Open Modal
  function openFeedback() {
    overlay.classList.add("pf-active");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  // Close Modal
  function closeFeedback() {
    overlay.classList.remove("pf-active");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", openFeedback);
  closeBtn.addEventListener("click", closeFeedback);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeFeedback();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" &&
        overlay.classList.contains("pf-active")) {
      closeFeedback();
    }
  });

  // Star Rating
  const stars = ratingBox.querySelectorAll("button");

  stars.forEach(star => {
    star.addEventListener("click", () => {

      selectedRating = Number(star.dataset.rating);

      stars.forEach(item => {
        const value = Number(item.dataset.rating);

        item.classList.toggle(
          "pf-selected",
          value <= selectedRating
        );
      });

      ratingText.textContent =
        ratingLabels[selectedRating];
    });
  });

  // Category Selection
  const categories =
    categoryBox.querySelectorAll("button");

  categories.forEach(button => {
    button.addEventListener("click", () => {

      selectedCategory = button.dataset.category;

      categories.forEach(item => {
        item.classList.toggle(
          "pf-selected",
          item === button
        );
      });
    });
  });

  // Character Counter
  messageInput.addEventListener("input", () => {
    count.textContent =
      `${messageInput.value.length}/2000`;
  });

  // Prepare Feedback
  function prepareFeedback() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!message) {
      alert("Please write your feedback first.");
      messageInput.focus();
      return null;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return null;
    }

    return [
      "================================",
      "GK / GS ONLINE MOCK TEST",
      "STUDENT FEEDBACK",
      "================================",
      "",
      `Name: ${name || "Anonymous"}`,
      `Email: ${email || "Not provided"}`,
      `Rating: ${selectedRating ? selectedRating + "/5" : "Not rated"}`,
      `Category: ${selectedCategory || "General Feedback"}`,
      "",
      "Feedback Message:",
      message,
      "",
      "--------------------------------",
      "Developer: Sumit Kumar",
      "Email: sumitkjmu09@gmail.com",
      "WhatsApp: +91 8969543599",
      "--------------------------------"
    ].join("\n");
  }

  // WhatsApp
  whatsappBtn.addEventListener("click", () => {

    const feedback = prepareFeedback();

    if (!feedback) return;

    const whatsappURL =
      "https://wa.me/918969543599?text=" +
      encodeURIComponent(feedback);

    window.open(whatsappURL, "_blank", "noopener");

  });

  // Email
  emailBtn.addEventListener("click", () => {

    const feedback = prepareFeedback();

    if (!feedback) return;

    const subject = encodeURIComponent(
      "New GK / GS Mock Test Feedback"
    );

    const body = encodeURIComponent(feedback);

    const mailURL =
      `mailto:sumitkjmu09@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailURL;

  });

})();
