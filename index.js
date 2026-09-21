/* THEME */

// Switches between dark mode and light mode
function switchTheme() {
	// Change theme
	document.body.classList.toggle("dark-mode");
	document.body.classList.toggle("light-mode");
	// Change theme button icon
	var icon = document.getElementById("theme-icon");
	if (document.body.classList.contains("dark-mode")) {
		icon.classList.remove("fa-solid");
		icon.classList.add("fa-regular");
	} else {
		icon.classList.remove("fa-regular");
		icon.classList.add("fa-solid");
	}
	switchTagText();
}

// Triggers upon pressing the SPACE key
window.addEventListener("keydown", (event) => {
  if (event.code == "Space" && !event.repeat) {
	switchTheme();
  }
});