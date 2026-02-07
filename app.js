let div=document.getElementsByTagName("div")[0];
let button=document.getElementsByTagName("button")[0];

function generateRGB(){
    let value=((Math.random())*255)+1;
    return value;
}

function changeColor(){
    let r=generateRGB();
    let g=generateRGB();
    let b=generateRGB();

    div.style.backgroundColor=`rgb(${r},${g},${b})`;
}

button.addEventListener("click",changeColor);

