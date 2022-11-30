const cpf = "12345678900";
const cnpj = "12345678000099";





function lol(cpf){

    
    

    if(cpf.length  !== 11){
        console.log("CPF Inválido")
        
    }else{
        console.log(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(-2)}`)
    }


}
function lel(cnpj){

    if(cnpj.length !== 14){
        console.log('CNPJ Inválido')
    }else{
        console.log(`${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(-2)}`)
    }





}

lol(cpf)
lel(cnpj)