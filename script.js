is_visible = false

document.querySelector(".fun-btn").addEventListener("click",function visible(){
    if(!is_visible){
        document.querySelector(".dropdown-content").style.display = "flex";
        is_visible = true
    }
    else{
        document.querySelector(".dropdown-content").style.display = "none";
        is_visible = false
    }
})