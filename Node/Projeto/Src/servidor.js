const porta = 3003
const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDados")
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({ extended: true }))

app.get("/produtos", (req, resp, next) => {
    resp.send({ nome: "Notebook", preco: 123.45 })//Converter para JSON
})

app.get("/produtos/:id", (req, resp, next) => {
    resp.send(bancoDeDados.getProduto(req.params.id))

})

app.post("/produtos", (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    resp.send(produto)//JSON

})

//Atualizar
app.put("/produtos/:id", (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    resp.send(produto)

})

app.delete("/produtos/:id", (req, resp, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    resp.send(produto)
})

app.listen(porta, () => {
    console.log("Servidor executando na porta:" + porta)
})