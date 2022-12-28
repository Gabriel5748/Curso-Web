const http = require("http")
const { result } = require("lodash")

const getTurma = letra => {
    const url = `http:files.cod3r.com.br/curso-js/turmaA.json${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            var resultado = ""

            resp.on("data", dados => {
                resultado += dados
            })

            resp.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })


    })

}

//Objetivo de simplificar o uso de promises
//Síncrona
var obterAlunos = async() =>{
    const ta = await getTurma("A")
    const tb = await getTurma("B")
    const tc = await getTurma("C")
    return [].concat(ta,tb,tc)
}//Retorna um objeto AsyncFunction