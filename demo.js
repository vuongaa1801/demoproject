document.getElementById('ChangeColor').onclick = function(){
    var text = document.getElementById('text');
    if(text.style.color === 'black'){
        text.style.color = 'red';
    }else {
        text.style.color = 'black';
    }
}