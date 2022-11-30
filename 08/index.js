const cpf = "011.022.033-44";

let cepefe = cpf.toString();


let ne = cepefe.replace(".", "")




function padronizar (cepefe){
   
   
    while(cepefe !== cepefe.replace(".", "") || cepefe !== cepefe.replace("-", "")){
       cepefe = cepefe.replace(".", "")
       cepefe = cepefe.replace("-", "")
    }
    console.log(cepefe)
}


padronizar (cepefe)