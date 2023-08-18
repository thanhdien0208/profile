// Parallax
let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    /*scrollY is the web scrollbar position (pixel)*/
    let top = this.scrollY;
    /*index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    When scrolling the web, the classes bg scroll down,
    the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if(index != 0 && index != 3){
            bg.style.transform = `translateY(${(top*index/2)}px)`;
        }else if(index == 0){
            bg.style.transform = `translateY(${(top/2)}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${(top*4/2)}px)`;

    /* parallax scroll in tab
    when tab's position is less than 550 px
    from scrollbar position add active class to animate 
    and vice versa
    */
    listTab.forEach(tab =>{
        if(tab.offsetTop - top < 550){
            tab.classList.add('active');
        }
        else{
            tab.classList.remove('active');
        }
    })
});

// Hieu ung click card
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

