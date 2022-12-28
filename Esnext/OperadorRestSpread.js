//Operador rest (agrupar) ou spread (espalhar)
//Usar rest como parâmetro de função

//Usar spread com objeto
const funcionario = {
    nome:"Maria",
    salario: 1500.00
}

const clone = {
    ativo:true,
    ...funcionario
}

console.log(clone)

//Usar spread com array
const grupoA = ["João","Pedro","Gloria"]
const grupofinal = ["Maria",...grupoA,"Luiza"]
console.log(grupofinal)