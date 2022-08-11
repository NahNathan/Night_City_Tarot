const pok = document.getElementById("pok")
const btn = document.getElementById("botao")

function random(){
    let i = Math.floor(Math.random()*22)
    taro.setAttribute("src",`./Cartas/${i}.png`)
}

btn.addEventListener("click",random)
