const express = require("express")
const router = express.Router()
const TaskController = require("../controller/TaskController")

//criar as minhas rotas

router.get('/', TaskController.showTasks)





module.exports = router