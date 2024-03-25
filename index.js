const express = require("express")
const app = express();

const taskRoutes = require("./routes/taskRoutes")

app.use(express.urlencoded({
    extended:true
}))
//middlewares para json e uma pasta pública
app.use(express.json())
app.use(express.static('public'))

//Chamaremos as rotas da aplicação
app.use(taskRoutes)

app.listen(3001, ()=>{
    console.log("Servidor no ar...")
})