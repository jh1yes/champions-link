const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;

    if(contador > imagens.length - 1) {
        contador = 0;
    }
    box.style.transform = `translateX(${-contador * 400}px)`;
}

setInterval(slider, 2000);




function mudafoto (foto)
{
document.getElementById("simbolo").src = foto;
}



const box2 = document.querySelector(".container2");
const imagens2 = document.querySelectorAll(".container2 img");

let contador2 = 0;

function slider2() {
    contador2++;

    if(contador2 > imagens.length - 1) {
        contador2 = 0;
    }
    box2.style.transform = `translateX(${-contador2 * 400}px)`;
}

setInterval(slider2, 2000);




function mudafoto (foto2)
{
document.getElementById("simbolo").src = foto2;
}