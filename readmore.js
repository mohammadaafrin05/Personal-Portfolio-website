javascript
// Add event listeners to each section
document.querySelectorAll('.academic,.technical_skills,.interest,.Testimonals,.Touch').forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('active');
  });
  section.addEventListener('mouseout', () => {
    section.classList.remove('active');
  });
});

// Add a scroll effect to each section
document.querySelectorAll('.academic,.technical_skills,.interest,.Testimonals,.Touch').forEach(section => {
  section.addEventListener('scroll', () => {
    section.classList.add('scrolled');
  });
});

// Add a fade-in effect to each section
document.querySelectorAll('.academic,.technical_skills,.interest,.Testimonals,.Touch').forEach(section => {
  section.style.opacity = 0;
  setTimeout(() => {
    section.style.opacity = 1;
  }, 500);
});