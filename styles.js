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
const imageLabel = document.getElementById("imageLabel");

fileInput.addEventListener("change", function() {
  if (fileInput.files.length > 0 && fileInput.files[0].type.startsWith("image/")) {
    // A file has been selected and it's an image
    const reader = new FileReader();
    reader.onload = function(event) {
      imageLabel.innerHTML = ''
      // Set the background-image of the imageLabel to the selected image
      imageLabel.style.backgroundImage = `url(${event.target.result})`;
    }

    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // No file selected or the selected file is not an image
    imageLabel.style.backgroundImage = "";
    
    imageLabel.innerHTML = 'Envie sua imagem'
  }
});