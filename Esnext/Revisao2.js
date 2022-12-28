//Arrow function
const soma = (a,b) => a + b

//Arrow function (this)
const lexico1 = () => console.log(this===module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametros default
function logo(texto = "Node"){
    console.log(texto)
}

logo("Sou mais forte")

//Operador rest
function total(...numeros){
    var total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))