function scrollToSection(ID) {
  if (!ID) {
    throw new Error("ID is required");
  }

  if (ID !== ID.toString()) {
    throw new Error("ID must be a string");
  }

  const element = document.getElementById(ID);

  if (element == undefined) {
    throw new Error("ID is undefined");
  }

  return element.scrollIntoView({ behavior: "smooth" });
}

export { scrollToSection };
