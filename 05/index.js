const numeroCartao = '1111222233334444';

let num = numeroCartao;

function padronizar (cart){

  mei =  num.slice(4, 12)
 
    for(i of mei){
       
        while(mei !== mei.replace(i, "*")){
            
            mei = mei.replace(i, "*")
        }



    }console.log(`${num.slice(0,4)}${mei}${num.slice(-4)}`)

}


    


padronizar(numeroCartao)