const TodoModel = require("../models/TodoModels")

const getTodo = async (req, res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
}


const saveTodo = async (req, res) => {

    const {
        text
    } = req.body

    TodoModel
        .create(text)
        .then((data) => {
            console.log("data added successfully")
            console.log(data)
            res.send
        })
}


const updateToDo = async (req, res) => {
    const {
        _id,
        text
    } = req.body
    TodoModel
        .findByIdAndUpdate(_id, {
            text
        })
        .then(() => res.send("updated successfully"))
        .catch((err) => console.log(err))
}

const deleteToDo = async (req, res) => {
    const {
        _id
    } = req.body
    TodoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted successfully"))
        .catch((err) => console.log(err))
}


module.exports = {
    getTodo,
    saveTodo,
    updateToDo,
    deleteToDo
}