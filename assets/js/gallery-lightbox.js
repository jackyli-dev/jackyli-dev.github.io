document.addEventListener("DOMContentLoaded", function () {
  var galleryImages = document.querySelectorAll(".portfolio-gallery img");

  if (!galleryImages.length || typeof HTMLDialogElement === "undefined") {
    return;
  }

  var dialog = document.createElement("dialog");
  dialog.className = "portfolio-lightbox";
  dialog.setAttribute("aria-label", "Expanded project image");

  var closeButton = document.createElement("button");
  closeButton.className = "portfolio-lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close expanded image");
  closeButton.textContent = "x";

  var expandedImage = document.createElement("img");
  expandedImage.alt = "";

  dialog.appendChild(closeButton);
  dialog.appendChild(expandedImage);
  document.body.appendChild(dialog);

  function closeLightbox() {
    dialog.close();
    expandedImage.removeAttribute("src");
    expandedImage.alt = "";
  }

  galleryImages.forEach(function (image) {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Expand image");

    function openLightbox() {
      expandedImage.src = image.currentSrc || image.src;
      expandedImage.alt = image.alt || "";
      dialog.showModal();
    }

    image.addEventListener("click", openLightbox);
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox();
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      closeLightbox();
    }
  });

  dialog.addEventListener("cancel", function () {
    expandedImage.removeAttribute("src");
    expandedImage.alt = "";
  });
});
