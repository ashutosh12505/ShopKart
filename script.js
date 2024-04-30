const images = document.querySelectorAll(".header-slider ul img");
// images is an array containing all the image elements inside the ul of the class header-slider
const prev_btn = document.querySelector(".control_previous");
const next_btn = document.querySelector(".control_next");
let n = 0;
function changeSlide(){
    for(let i=0; i<images.length; i++){
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}
changeSlide();// calling this function hides all the images and then it displays only the image accessed by images[n]
// previous button should decrease the value of 'n' and next button should increase the value of 'n'

prev_btn.addEventListener('click', (eventName)=>{
    if(n>0){
        n--;
    }else if(n==0){
        n=images.length - 1;// if already first image is being displayed then last image will be displayed
    }
    changeSlide();// change the image based on new value of 'n'
})
next_btn.addEventListener('click', (eventName)=>{
    if(n<images.length-1){
        n++;
    }else if(n==images.length-1){
        n=0;// if already last image is being displayed then directly first image will be displayed
    }
    changeSlide();// change the image based on new value of 'n'
})
// scrolling using mouse-wheel
// const scrollContainer = document.querySelectorAll(".products");
// for(let item of scrollContainer){
//     item.addEventListener('wheel',(eventName)=>{
//         eventName.preventDefault();
//         item.scrollLeft+=eventName.deltaY;
//     })
// }
// Function to submit the form
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Reload the page
    window.location.reload();
}

// Event listener for form submission
// document.getElementById("searchForm").addEventListener("submit", submitForm);

// Event listener for Enter key press on the search input
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    // Check if Enter key was pressed (key code 13)
    if (event.key === "Enter") {
        submitForm(event);
    }
});
