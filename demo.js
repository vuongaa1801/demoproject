const button = document.getElementById("Btn");
const text = document.getElementById("text");
button.addEventListener("click",function(){
    text.style.display = "block";

    setTimeout(function() {
    text.style.display = "none";
},5000);
});