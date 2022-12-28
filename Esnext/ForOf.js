//Of - valores
for (var letra of "Cod3r") {
    console.log(letra)
}

const assuntos = ["Map", "Set", "Promessa"]

//In - índice
for (var i in assuntos) {
    console.log(i)
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }]

])

for (var assunto of assuntosMap) {
    console.log(assunto)
}

for (var chave of assuntosMap.keys()) {
    console.log(chave)
}

for (var valor of assuntosMap.values()) {
    console.log(valor)
}

for (var [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}