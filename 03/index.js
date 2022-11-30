const texto = "Aprenda programar do zero na Cubos Academy";

let textomin = texto.toLowerCase()

function subs (textomin){
 
    while(textomin !== textomin.replace(" ", "-")){
        
        textomin = textomin.replace(" ", "-")

    }
console.log(textomin)
}

subs(textomin)