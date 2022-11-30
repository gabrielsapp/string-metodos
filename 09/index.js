const nome = 'Guido Cerqueira';

let real = nome




function padrao (real){

    while(real !== real.toLowerCase()){
        real = real.toLowerCase()
    }

   while(real !== real.replace(" ", "")){
    real = real.replace(" ", "")
   }
   while(real !== real.padStart(real.length +1, "@")){
  real = real.padStart(real.length +1, "@")
break;
}

    if(real.length >=  14){
        real = real.slice(0,13)
    }


 console.log(real)
}

padrao(real)