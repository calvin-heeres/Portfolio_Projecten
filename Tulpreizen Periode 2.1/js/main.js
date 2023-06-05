function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    event.preventDefault(); // Prevent default behavior of the <li> element
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }  