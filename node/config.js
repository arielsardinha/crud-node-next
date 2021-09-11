const express = require('express')
const { uuid } = require('uuidv4');
var cors = require('cors')

module.exports = function () {
    const app = express()
    app.set('port', 8090)
    app.use(express.json())
    app.use(cors())
    // app.use(express.urlencoded({ extended: true }))
    var count = 2

    const users =
        [
            {
                id: 0,
                email: 'email@email',
                name: 'Ariel',
                idade: 28,
                newDate: '09/09/2021',
                data: '16/04/1993',
                cpf: 12323123,
                password: '1234',
                token: '',
                admin: true
            },
            {
                id: 1,
                email: 'teste@teste',
                name: 'Paulo',
                idade: 40,
                newDate: '09/09/2021',
                data: '16/04/1993',
                cpf: 12323123,
                password: '1234',
                token: '',
                admin: false
            }
        ]

    app.post('/user/register', async (req, res) => {
        const { email, name, idade, data, password, cpf, admin = false } = await req.body
        try {
            count += count
            users.push({ email, name, idade, password, admin, id: count, data, cpf, newDate: new Date() })
            return res.json(users)
        } catch (error) {
            return res.sendStatus(400)
        }

    })

    app.post('/user/token', async (req, res) => {
        const { email, password } = await req.body
        for (let i = 0; i <= users.length; i++) {
            try {
                if (email === users[i].email && password === users[i].password) {
                    const token = uuid()
                    users[i].token = token
                    return res.json({ data: users[i], token: token })
                }
            } catch (error) {
                return res.sendStatus(400)
            }

        }
    })

    app.get('/user', (req, res) => {
        return res.json(users)
    })

    app.get('/user/:index', async (req, res) => {
        const { index } = await req.params
        return res.json(users[index])
    })

    app.put('/edit/:index', async (req, res) => {
        const { email, name, idade, data, password, cpf, token = '', admin = false } = await req.body
        const { index } = req.params
        users[index] = { email, name, idade, password, token, admin, data, cpf }
        return res.json(users)
    })

    app.delete('/delete/:index', (req, res) => {
        const { index } = req.params
        try {
            for (let i = 0; i < users.length; i++) {
                if (index == users[i].id) {
                    users.splice(i,1)
                    return res.json(users)
                }
            }
        } catch (error) {
            return res.sendStatus(400)
        }
    })
    return app;
}
