(function () {
  const form = document.getElementById("progress-form");
  const dateInput = document.getElementById("progress-date");
  const weightInput = document.getElementById("progress-weight");
  const noteInput = document.getElementById("progress-note");
  const fileInput = document.getElementById("progress-photo");
  const statusEl = document.getElementById("progress-status");
  const gallery = document.getElementById("progress-gallery");

  dateInput.value = todayISO();

  /* Redimensionne l'image côté navigateur avant stockage (le localStorage
     est limité à quelques Mo : on garde des fichiers légers). */
  function resizeImageToDataURL(file, maxDim) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = () => { img.src = reader.result; };
      reader.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) {
          height = Math.round(height * (maxDim / width));
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round(width * (maxDim / height));
          height = maxDim;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function renderGallery() {
    const photos = getProgressPhotos();
    if (photos.length === 0) {
      gallery.innerHTML = `<p class="empty-state">${t("empty.noProgressPhotos")}</p>`;
      return;
    }
    gallery.innerHTML = photos.map((p, i) => `
      <div class="card">
        <div class="thumb"><img src="${p.photo}" alt="${escapeHtml(t("label.progressAlt", { date: p.date }))}"></div>
        <div class="body">
          <span class="meta">${p.date}${p.weight ? " · " + p.weight + " kg" : ""}</span>
          ${p.note ? `<span class="meta">${escapeHtml(p.note)}</span>` : ""}
          <button class="danger-link" data-index="${i}" style="align-self:flex-start;margin-top:4px">${t("btn.delete")}</button>
        </div>
      </div>
    `).join("");
    gallery.querySelectorAll("button[data-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (confirm(t("confirm.deletePhoto"))) {
          deleteProgressPhoto(Number(btn.dataset.index));
          renderGallery();
        }
      });
    });
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) return;
    statusEl.textContent = t("status.processingPhoto");
    try {
      const dataUrl = await resizeImageToDataURL(file, 1280);
      addProgressPhoto({
        date: dateInput.value || todayISO(),
        weight: Number(weightInput.value) || 0,
        note: noteInput.value.trim(),
        photo: dataUrl
      });
      form.reset();
      dateInput.value = todayISO();
      statusEl.textContent = t("status.photoAdded");
      renderGallery();
    } catch (err) {
      statusEl.textContent = t("status.errorProcessing") + err.message;
    }
  });

  renderGallery();
})();
