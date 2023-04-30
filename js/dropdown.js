const dropdownButton = document.querySelector("#dropdown");
const dropdownList = document.querySelector("#dropdown + div.hidden");

dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("hidden");
});