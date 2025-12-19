let ham = document.getElementById("ham");

function Open() {
    hamBtn.classList.add("hidden");
    ham.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    inicio.classList.remove("z-50");
    inicio.classList.add("z-40");
}

function Close() {
    hamBtn.classList.remove("hidden");
    ham.classList.add("hidden");
    closeBtn.classList.add("hidden");
}
