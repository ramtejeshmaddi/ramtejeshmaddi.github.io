// ------------------------------
// 1. Typewriter Effect
// ------------------------------
const text = "Entry-Level Software Developer • Halifax, NS";
let i = 0;

function typeWriter() {
  const subtitle = document.getElementById("subtitle");
  if (!subtitle) return;

  if (i < text.length) {
    subtitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();


// ------------------------------
// 2. Scroll Reveal Animations
// ------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .project, .skills span").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ------------------------------
// 3. Parallax Header Effect
// ------------------------------
document.addEventListener("mousemove", (e) => {
  const header = document.querySelector("header");
  if (!header) return;

  const moveX = (e.clientX / window.innerWidth) * 10;
  const moveY = (e.clientY / window.innerHeight) * 10;

  header.style.backgroundPosition = `${moveX}px ${moveY}px`;
});


// ------------------------------
// 4. Skill Badge Hover Tooltip
// ------------------------------
document.querySelectorAll(".skills span").forEach(skill => {
  skill.style.position = "relative";

  skill.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = `Skill: ${skill.innerText}`;
    tooltip.style.position = "absolute";
    tooltip.style.background = "#1f2833";
    tooltip.style.padding = "6px 10px";
    tooltip.style.border = "1px solid #66fcf1";
    tooltip.style.borderRadius = "6px";
    tooltip.style.top = "-35px";
    tooltip.style.left = "0";
    tooltip.style.fontSize = "0.8rem";
    tooltip.style.whiteSpace = "nowrap";
    tooltip.style.zIndex = "10";
    skill.appendChild(tooltip);
  });

  skill.addEventListener("mouseleave", () => {
    const tooltip = skill.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  });
});
