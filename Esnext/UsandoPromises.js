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


var nomes = []
getTurma("A").then(alunos => {
    nomes = nomes.concat(alunos.map(a => `À:${a.nome}`))
})
