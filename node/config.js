const express = require('express')

module.exports = function () {
    const app = express()
    app.set('port', 8090)
    app.use(express.json())
    // app.use(express.urlencoded({ extended: true }))
    const routes = express.Router()

    const users = []

    app.post('/register', async (req, res) => {
        const { name, idade } = await req.body
        users.push({ name, idade })
        return res.send(users)
    })

    app.get('/user', (req, res) => {
        return res.send(users)
    })

    app.get('/user/:index', async (req, res) => {
        const { index } = await req.params
        return res.send(users[index])
    })

    app.put('/edit/:index', async (req, res) => {
        const { name, idade } = await req.body
        const { index } = req.params
        users[index] = { name, idade }
        return res.send(users)
    })

    app.delete('/delete/:index', (req, res) => {
        const { index } = req.params
        users.splice(index, 1)
        return res.send(users)
    })
    return app;
}
