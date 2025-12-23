/* ===============================
   Ripple Effect
================================ */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn, .play, .pbtn, .tab");
  if (!btn) return;

  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = e.clientX - rect.left - size / 2 + "px";
  ripple.style.top = e.clientY - rect.top - size / 2 + "px";

  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* ===============================
   Apply Button Feedback
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.getElementById("apply");
  if (!applyBtn) return;

  applyBtn.addEventListener("click", () => {
    const originalText = applyBtn.textContent;
    applyBtn.textContent = "Applied ✓";
    applyBtn.style.background =
      "linear-gradient(135deg,#22c55e,#16a34a)";

    setTimeout(() => {
      applyBtn.textContent = originalText;
      applyBtn.style.background = "";
    }, 900);
  });
});