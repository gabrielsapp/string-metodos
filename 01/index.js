const comentario = "Esse  é muito perigoso!";

let all = comentario.toUpperCase()


function lol (comentario){
  if(all.includes('COVID')){
    console.log('Comentário bloqueado por conter palavras proibidas')
  }else{
    console.log('Comentário autorizado')
  }
    
}

lol(all)
