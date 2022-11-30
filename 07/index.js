const email = "jose.messias@cubos.academy";

let real = email.includes("@")

let fim = email.slice(-1)
let ponto = email.includes(".")



function padronizar (email){
    if(email[0] === "."){
        console.log("E-mail inválido")
    }else if(fim === "."){
        console.log('E-mail inválido')
    }else if(real === false){
        console.log('E-mail inválido')
    }else if(ponto === false){
        console.log('E-mail inválido')
    }else{
        console.log('E-mail válido')
    }
}











padronizar (email)