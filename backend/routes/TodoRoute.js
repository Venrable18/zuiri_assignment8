const express = require("express")
const { getTodo, saveTodo, updateToDo, deleteToDo } = require("../controllers/TodoControllers")

const router = express.Router()

router.get("/", getTodo)
router.post("/save", saveTodo)
router.post("/update", updateToDo)
router.post("/delete", deleteToDo)

module.exports = router



