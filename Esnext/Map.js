const tecnologias = new Map()
tecnologias.set("react", { framework: false })
tecnologias.set("angular", { framework: false })

console.log(tecnologias.react)
console.log(tecnologias.get("react").framework)

const chavesvariadas = new Map([
    [function () { }, "Função"],
    [{}, "Objeto"],
    [123, "Número 1"]])

chavesvariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesvariadas.has(123))
console.log(chavesvariadas.delete(123))
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size)