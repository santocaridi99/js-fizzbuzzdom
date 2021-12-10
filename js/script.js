const outputHtml = document.querySelector('.conta')
//algoritmo fizzbuzz
//ciclo deve contare numeri da 1 a 100
//prima lavoro sull eccezione se numero è divisibile sia per 3 che per 5 allora stampo Fizzbuzz
//se numero è divisibile per 3 stampo Fizz
//se numero è divisibile per 5 stampo Buzz
//restante dei numeri stampati normalmente 
for(let i=1 ; i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        outputHtml.innerHTML += '<div>Fizzbuz</div>'
    }
    else if(i % 3 === 0){
        outputHtml.innerHTML += '<div>Fizz</div>'
    }
    else if(i % 5 ===0){
        outputHtml.innerHTML += '<div>Buzz</div>'
    }
    else{
        outputHtml.innerHTML += `<div> ${i} </div>`
    }
}