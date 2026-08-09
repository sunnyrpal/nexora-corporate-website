const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  const header = $("#header");
  const progress = $("#progress");
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  const themeToggle = $("#themeToggle");
  const sunIcon = $("#sunIcon");
  const moonIcon = $("#moonIcon");
  const form = $("#contactForm");
  const status = $("#formStatus");

  // Theme
  const savedTheme = localStorage.getItem("nexora-theme");
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }

  function updateThemeIcons() {
    const dark = document.documentElement.classList.contains("dark");
    sunIcon.classList.toggle("hidden", !dark);
    moonIcon.classList.toggle("hidden", dark);
  }
  updateThemeIcons();

  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("nexora-theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    updateThemeIcons();
  });

  // Header + reading progress
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("bg-white/85", y > 20);
    header.classList.toggle("backdrop-blur-xl", y > 20);
    header.classList.toggle("shadow-sm", y > 20);
    header.classList.toggle("dark:bg-slate-950/80", y > 20);

    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  menuBtn.addEventListener("click", () => {
    const open = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", String(!open));
  });
  $$(".mobile-link").forEach(link => link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));

  // Contact form: client-side functional mailto handoff.
  // Replace the address below with the real company email or connect this form to
  // Formspree, Netlify Forms, a serverless endpoint, or your CRM before launch.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const company = data.get("company").trim();
    const message = data.get("message").trim();

    if (!name || !email || !message) {
      status.textContent = "Please complete the required fields.";
      status.className = "text-sm text-red-500";
      return;
    }

    const subject = encodeURIComponent(`New Nexora inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`
    );

    status.textContent = "Opening your email client…";
    status.className = "text-sm text-teal-600";
    window.location.href = `mailto:hello@nexora.example?subject=${subject}&body=${body}`;
  });

  // Current year
  $("#year").textContent = new Date().getFullYear();

  // Basic keyboard UX for links that point to '#'
  $$('a[href="#"]').forEach(a => a.addEventListener("click", e => e.preventDefault()));
});
