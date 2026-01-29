// Populate modal with the clicked image (trigger is a <button> for keyboard access)
const imgModal = document.getElementById("imgModal");
imgModal.addEventListener("show.bs.modal", (event) => {
  const trigger = event.relatedTarget;
  if (!trigger) return;

  const src = trigger.getAttribute("data-img-src");
  const alt = trigger.getAttribute("data-img-alt");
  const caption = trigger.getAttribute("data-img-caption");

  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("imgModalDesc");
  const openInNewTab = document.getElementById("openInNewTab");

  modalImg.src = src;
  modalImg.alt = alt;
  modalDesc.textContent = caption;
  openInNewTab.href = src;

  document.getElementById("imgModalLabel").textContent = alt;
});

imgModal.addEventListener("hidden.bs.modal", () => {
  const modalImg = document.getElementById("modalImg");
  modalImg.src = "";
  modalImg.alt = "";
  document.getElementById("imgModalDesc").textContent = "";
  document.getElementById("imgModalLabel").textContent = "Image preview";
});
