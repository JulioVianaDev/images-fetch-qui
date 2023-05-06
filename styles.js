const body = document.getElementById("body");
  const icons = document.getElementById("temasOptions");

  function toggleTheme() {
    const moonIcon = '<img id="moon" src="./images/moon.png" onclick="toggleTheme()"/>';
    const sunIcon = '<img id="sun" src="./images/sun.png" onclick="toggleTheme()"/>';

    if (body.classList.contains("body-dark")) {
      body.classList.remove("body-dark");
      body.classList.add("body-light");
      icons.innerHTML = moonIcon;
    } else {
      body.classList.remove("body-light");
      body.classList.add("body-dark");
      icons.innerHTML = sunIcon;
    }
  }
  const fileInput = document.getElementById("myFileInput");

  fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0 && fileInput.files[0].type.startsWith("image/")) {
      // A file has been selected and it's an image
      console.log("An image has been selected");
    } else {
      // No file selected or the selected file is not an image
      console.log("No image selected");
    }
  });