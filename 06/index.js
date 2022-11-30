const celular = 99918888;

num = celular.toString()
function padronizar (num){
   
    if(num.length === 10){
        console.log(`(${num.slice(0,2)}) 9 ${num.slice(2,6)}-${num.slice(-4)}`)
    }else if(num.length === 8){
        console.log(`9 ${num.slice(0,4)}-${num.slice(-4)}`)
    }
    
}
console.log(num.length)
padronizar(num)