const bodyParser = require("body-parser")
const express = require("express")
//Instanciando o express
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, ".")
    },

    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single("arquivo")
app.post("/upload",(req,resp,err)=>{
    if(err){
        return resp.send("Ocorreu um erro...")
    }

    resp.end("Concluído com sucesso!")
})

app.listen(8080, () => {
    console.log("Executando....")
})