window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");

    const loaderShown = this.sessionStorage.getItem("loaderShown");

    if(!loaderShown){
        this.sessionStorage.setItem("loaderShown", "true");
        loader.style.display = "flex";
        setTimeout(function(){

            loader.style.opacity = "0";
            document.querySelector(".main").style.display = "block";
        }, 2000);

        setTimeout(function(){

            loader.style.display = "none";
            
        }, 3000);
    } 

    else { 
        loader.style.display = "none";
        document.querySelector(".main").style.display = "block";
    }

});


let is_visible = false;
document.querySelector(".fun-btn").addEventListener("click", function visible(e){
    e.stopPropagation(); 
    const dropdown = document.querySelector(".dropdown-content");
    if(!is_visible){
        dropdown.style.display = "flex";
        is_visible = true;
    } else {
        dropdown.style.display = "none";
        is_visible = false;
    }
});

const namegen = document.querySelector("#namegen")

let woofMode = localStorage.getItem("woofMode") === "true";
let woofSound = new Audio("woof.mp3");
woofSound.preload = "auto";

const woofbtn = document.querySelector("#woofstyle");

function updateWoofButton(){
    if(woofMode){
        woofbtn.style.backgroundColor = "green";
        woofbtn.textContent = "Woof Style ON ";
    } else {
        woofbtn.style.backgroundColor = "white";
        woofbtn.textContent = "Woof Style OFF";
    }
}

updateWoofButton();

woofbtn.addEventListener("click", function(e){
    e.stopPropagation(); 
    woofMode = !woofMode;
    localStorage.setItem("woofMode", woofMode);
    updateWoofButton();
});


document.addEventListener("click", function(e){
    if(woofMode && e.target !== woofbtn){
        woofSound.currentTime = 0;
        woofSound.play();
    }
});

// Dog base names
const dogNames = [
    "Buddy", "Max", "Charlie", "Bella", "Luna", "Rocky", "Milo","Coco", "Daisy", "Bailey", "Lucy", "Oliver", "Toby", "Sadie","Zoe", "Jack", "Leo", "Ruby", "Rex", "Maggie", "Nala", "Finn","Oscar", "Lola", "Bear"
];

const suffixes = [
    "Bark", "Paws", "Tail", "Woof", "Sniffer", "Fur","Bones", "Howl", "Jump", "Nose", "Whiskers", "Furry","Wag", "Puppy", "Zoom", "Snout", "Fido", "Snuffles","Fluff", "Pupper", "Snouty", "Wiggles", "Pawsy"
];


namegen.addEventListener("click", function() {
    const dog = dogNames[Math.floor(Math.random() * dogNames.length)];
    
    const suf = suffixes[Math.floor(Math.random() * suffixes.length)];

    const generated = `${dog} ${suf}`;

    woofSound.currentTime = 0;

    woofSound.play();

    alert("Your dog name is " + generated)
});






