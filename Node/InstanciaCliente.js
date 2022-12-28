const contadorA = require("./InstanciaUnica")
const contadorB = require("./InstanciaUnica")

const contadorC = require("./InstanciaNova")
const contadorD = require("./InstanciaNova")

contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)
