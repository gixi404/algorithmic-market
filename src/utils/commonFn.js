function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

export { scrollToSection };
