const express = require('express')
const cors = require('cors');
// nodemon
const todoDB = require('./database')

const app = express()
const port = 4000

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
// does not have a parser we need to add it
app.get('/todos', (req, res) => {
    todoDB.query("SELECT * from todos", (err, data) => {
        res.send(data)
    })
})
app.get("/todos/:id", (req, res) => {
    todoDB.query(`select * from todos where id = ${req.params.id}`, (err, data) => {
        res.send(data)
    })
})
app.post('/todos', (req, res) => {
    const { title, completed } = req.body
    todoDB.query(`INSERT INTO todos (title, completed) VALUES ("${title}", ${completed})`, (err, data) => {
        res.send({
            id: data.insertId,
            content: req.body.content
        })
    })
})
app.delete("/todos/:id", (req, res) => {
    todoDB.query(`DELETE FROM todos where id = ${req.params.id}`, (err, data) => {
        res.send({ msg: 'deleted' })
    })
})
app.patch("/todos/:id", (req, res) => {
    const { id, title, completed } = req.body
    if (title !== undefined) {
        todoDB.query(`UPDATE todos SET title = "${title}" where id = ${req.params.id}`, (err, data) => {
            res.send({ msg: 'updated' })
        })
    } else {
        todoDB.query(`UPDATE todos SET completed = ${completed} where id = ${req.params.id}`, (err, data) => {
            res.send({ msg: 'updated' })
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

