
/*
 PATCH: Disable casino rendering + update empty-state text
 This file should be loaded AFTER your main JS.
*/
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".casino-list, .results, #casino-results");
  if (list) {
    list.innerHTML = `
      <div class="empty-state">
        <p><strong>No casino listings are currently published.</strong></p>
        <p>We currently focus on casino news, game releases, and independent editorial content.</p>
      </div>
    `;
  }
});
