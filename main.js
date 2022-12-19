let pom =document.querySelector("#som_tecla_pom")
let clap =document.querySelector("#som_tecla_clap")
let tim =document.querySelector("#som_tecla_tim")
let puff =document.querySelector("#som_tecla_puff")
let splash =document.querySelector("#som_tecla_splash")
let toim =document.querySelector("#som_tecla_toim")
let psh =document.querySelector("#som_tecla_psh")
let tic =document.querySelector("#som_tecla_tic")
let tom =document.querySelector("#som_tecla_tom")

let teclaPom =document.querySelector(".tecla_pom")
let teclaClap =document.querySelector(".tecla_clap")
let teclaTim =document.querySelector(".tecla_tim")
let teclaPuff =document.querySelector(".tecla_puff")
let teclaSplash =document.querySelector(".tecla_splash")
let teclaToim =document.querySelector(".tecla_toim")
let teclaPsh =document.querySelector(".tecla_psh")
let teclaTic =document.querySelector(".tecla_tic")
let teclaTom =document.querySelector(".tecla_tom")




function somPom(){
    pom.play()
}
function somClap(){
    clap.play()
}
function somTim(){
    tim.play()
}
function somPuff(){
    puff.play()
}
function somSplash(){
    splash.play()
}
function somToim(){
    toim.play()
}
function somPsh(){
    psh.play()
}
function somTic(){
    tic.play()
}
function somTom(){
    tom.play()
}


teclaPom.onclick = somPom;
teclaClap.onclick = somClap;
teclaTim.onclick = somTim;
teclaPuff.onclick = somPuff;
teclaSplash.onclick = somSplash;
teclaToim.onclick = somToim;
teclaPsh.onclick = somPsh;
teclaTic.onclick = somTic;
teclaTom.onclick = somTom;