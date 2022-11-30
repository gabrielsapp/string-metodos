let identificador = "123";
let nome = "josé silva costa";
let email = "      jose@email.com  ";

let cima = ""
function ident (id){
    if(id.length < 6){
       id = id.padStart(6, 0)
    }
    console.log(id)

    
}

function emai(email){

    while(email !== email.replace(" ", "")){
    email= email.replace(" ", "")
}
console.log(email)
}



function namo(nome){
  
  acabou = nome.slice(-1)
  vazio = nome.indexOf(" ")
  ult = nome.lastIndexOf(" ")

  console.log(`${nome[0].toUpperCase()}${nome.slice(1, vazio)} ${nome[vazio + 1].toUpperCase()}${nome.slice(vazio + 2, ult)} ${nome[ult + 1].toUpperCase()}${nome.slice(ult + 2)} `)

}



namo(nome)

emai(email)

ident(identificador)