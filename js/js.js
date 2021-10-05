const btn_a = document.getElementById("A")
const btn_s = document.getElementById("S")
const btn_d = document.getElementById("D")
const btn_f = document.getElementById("F")
const btn_g = document.getElementById("G")
const btn_h = document.getElementById("H")
const btn_j = document.getElementById("J")
const btn_k = document.getElementById("K")
const btn_l = document.getElementById("L")

const audioDO = document.getElementById("do")
const audioRE = document.getElementById("re")
const audioMI = document.getElementById("mi")
const audioFA = document.getElementById("fa")
const audioSOL = document.getElementById("sol")
const audioLA = document.getElementById("la")
const audioSI = document.getElementById("si")
const audioDO2 = document.getElementById("do2")
const audioRE2 = document.getElementById("re2")

document.addEventListener("keypress", (event) =>{
    if(event.key == "a"){
        audioDO.play();
    }
    else if(event.key == "s"){
        audioRE.play();
    }
    else if(event.key == "d"){
        audioMI.play();
    }
    else if(event.key == "f"){
        audioFA.play();
    }
    else if(event.key == "g"){
        audioSOL.play();
    }
    else if(event.key == "h"){
        audioLA.play();
    }
    else if(event.key == "j"){
        audioSI.play();
    }
    else if(event.key == "k"){
        audioDO2.play();
    }
    else if(event.key == "l"){
        audioRE2.play();
    }
});

btn_a.addEventListener("click", ()=>{
    audioDO.play();
})
btn_s.addEventListener("click", ()=>{
    audioRE.play();
})
btn_d.addEventListener("click", ()=>{
    audioMI.play();
})
btn_f.addEventListener("click", ()=>{
    audioFA.play();
})
btn_g.addEventListener("click", ()=>{
    audioSOL.play();
})
btn_h.addEventListener("click", ()=>{
    audioLA.play();
})
btn_j.addEventListener("click", ()=>{
    audioSI.play();
})
btn_k.addEventListener("click", ()=>{
    audioDO2.play();
})
btn_l.addEventListener("click", ()=>{
    audioRE2.play();
})
