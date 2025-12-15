
/* ===== Free Trial Alert ===== */
document.querySelectorAll(".free-trial-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Free trial will be available soon.");
  });
});



/* ===== Pricing Modal Logic (FIXED) ===== */

const modal = document.getElementById("pricingModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancel-btn");
const confirmBtn = document.getElementById("confirmBtn");

/* Open modal ONLY when pricing buttons are clicked */
document.querySelectorAll(".pricing-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // safety

    const plan = this.dataset.plan;
    const price = this.dataset.price;

    modalTitle.textContent = `${plan} Plan Selected`;
    modalPrice.textContent = `Price: ${price} / month`;

    modal.style.display = "flex"; // open modal
  });
});

/* Close modal */
closeBtn.onclick = cancelBtn.onclick = () => {
  modal.style.display = "none";
};

/* Confirm action */
confirmBtn.onclick = () => {
  modal.style.display = "none";
  alert("Thank you! Our team will contact you shortly.");
};

/* Close when clicking outside modal */
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

