
document.querySelectorAll(".buy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.querySelector(".download-links").classList.remove("hidden");
    document.getElementById("modal").classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
  document.body.classList.remove("modal-open");
});
