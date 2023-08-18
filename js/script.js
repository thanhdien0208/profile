const img = document.querySelector("img");
const icons = document.querySelector(".icons");
img.onclick = function() {
    this.classList.toggle("active");
    icons.classList.toggle("active");
}

// Modal QR
// Get the modal
var modal = document.getElementById("boxQR");

// Get the button that opens the modal
var btn = document.getElementById("btnID");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}