const dropArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");

let button = dropArea.querySelector(".button");
let input = dropArea.querySelector("input");

let file;

button.onclick = () => {
  input.click();
};

// when browse
input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
});

// when file is inside drag area
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload";
  // console.log('File is inside the drag area');
});

// when file leave the drag area
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  // console.log('File left the drag area');
  dragText.textContent = "Drag & Drop";
});

// when file is dropped
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  // console.log('File is dropped in drag area');

  file = event.dataTransfer.files[0]; // grab single file even of user selects multiple files
  // console.log(file);
});

function displayFile() {
  let fileType = file.type;
  // console.log(fileType);
}
