const outputHtml = document.querySelector('.container')
//algoritmo fizzbuzz
//ciclo deve contare numeri da 1 a 100
//prima lavoro sull eccezione se numero è divisibile sia per 3 che per 5 allora stampo Fizzbuzz
//se numero è divisibile per 3 stampo Fizz
//se numero è divisibile per 5 stampo Buzz
//restante dei numeri stampati normalmente 
for(let i=1 ; i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        outputHtml.innerHTML += '<div class="box fizzBuzz">Fizzbuz</div>'
    }
    else if(i % 3 === 0){
        outputHtml.innerHTML += '<div class="box fizz">Fizz</div>'
    }
    else if(i % 5 ===0){
        outputHtml.innerHTML += '<div class="box buzz">Buzz</div>'
    }
    else{
        outputHtml.innerHTML += `<div class="box"> ${i} </div>`
    }
}