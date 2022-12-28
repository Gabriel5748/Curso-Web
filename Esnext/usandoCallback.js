//Sem promise
const http = require("http")

const getTurma = (letra,callback) => {
    const url = `http:files.cod3r.com.br/curso-js/turmaA.json${letra}.json`
    http.get(url,resp => {
        var resultado = ""

        resp.on("data",dados =>{
            resultado += dados
        })

        resp.on("end",()=>{
            callback(JSON.parse(resultado))
        })
    })
}

var nomes = []
getTurma("A", alunos =>{
    nomes = nomes.concat(alunos.map(a=>`À:${a.nome}`))
})
