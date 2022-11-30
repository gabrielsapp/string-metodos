const nomeArquivo = 'Foto da Familia.jpg';

let real = nomeArquivo

let blabla = real.slice(-3)
console.log(blabla)




function arquivo (real){

    if(real.slice(-3) !== "jpg" || real.slice(-3) !== "gif" || real.slice(-3) !== "png"){
        console.log('Arquivo inválido')
    }else{
       console.log('arquivo valido')
    
    }
}

arquivo(real)