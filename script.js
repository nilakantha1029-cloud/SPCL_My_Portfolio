function showModal(index) {
  const project = projects[index];
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.desc}</p>
                <h4>Technologies</h4>
                <div class="tags">
                    ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
                </div>
                <h4>Features</h4>
                <ul>
                    ${project.features.map((f) => `<li>${f}</li>`).join("")}
                </ul>
                <div style="margin-top: 30px;">
                    <a href="#" class="btn btn-primary">View Demo</a>
                    <a href="#" class="btn btn-secondary">GitHub</a>
                </div>
            `;

  modal.classList.add("show");
}

// Hide modal
function hideModal() {
  document.getElementById("modal").classList.remove("show");
}

// Close modal on outside click
document.getElementById("modal").onclick = function (e) {
  if (e.target == this) {
    hideModal();
  }
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
});

// Form submit
document.querySelector(".contact-form").onsubmit = function (e) {
  e.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
  this.reset();
};
