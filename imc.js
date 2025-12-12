
let nome = "rafs", peso = 45.5, altura =1.76
let imc = peso / altura * altura / 2.56



if(imc<18.5){
console.log(`paciente abaixo do peso imc ${imc}`)
}else if(imc >= 18.5 && imc <=24.9 ){
    console.log(`paciente com o peso normal imc ${imc}`)
}else if(imc >= 24.9 && imc <= 29.9 ){
    console.log(`paciente com excesso de peso imc ${imc}`)
}else if(imc >= 29.9 && imc <=34.9 ){
    console.log(`paciente com obesidade classe 1 imc ${imc}`)
}else if(imc >=34.9 && imc <=39.9){
    console.log(`paciete com obesidade clase 2 imc ${imc}`)
}else{
    console.log(`paciente com obesidade nivel 3 imc ${imc}`)
}






// let horasviagem
// let vlocidadeporhora
// let consumo
// carro roda a 12km/h