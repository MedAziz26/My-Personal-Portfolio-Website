// Get all nav links
const navLinks = document.querySelectorAll('.nav__link');

// Get all sections
const sections = document.querySelectorAll('section');

// Add event listener to each section
sections.forEach((section) => {
  section.addEventListener('intersect', () => {
    // Get the id of the current section
    const sectionId = section.id;

    // Get the corresponding nav link
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    // Add active class to the nav link
    navLink.classList.add('active-link');

    // Remove active class from other nav links
    navLinks.forEach((link) => {
      if (link !== navLink) {
        link.classList.remove('active-link');
      }
    });
  });
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through sections and check if they are in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Trigger intersect event on the section
      section.dispatchEvent(new Event('intersect'));
    }
  });
});