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
                id: 1,
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
                id: 2,
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

    // registrar
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

    // validar acesso
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

    // return
    app.get('/user', (req, res) => {
        return res.json(users)
    })

    // return por nome search
    app.get('/user/:name', (req, res) => {
        const { name } = req.params
        try {
            for (let i = 0; i < users.length; i++) {
                if (name == users[i].name) {
                    return res.json([users[i]])
                } else if (name == '') {
                    return res.json(users)
                } else {
                    return res.sendStatus(400)
                }
            }
        } catch (error) {
            return res.sendStatus(400)
        }
    })

    app.get('/user/edit/:id', (req, res) => {
        const { id } = req.params
        try {
            for (let i = 0; i < users.length; i++) {
                if (id == users[i].id) {
                    return res.json(users[i])
                }
            }
        } catch (error) {
            return res.sendStatus(400)
        }
    })

    // EDITA
    app.put('/edit/:index', async (req, res) => {
        const { index } = req.params
        const
            {
                id = users[index].id,
                newDate = users[index].newDate,
                token = users[index].token,
                email = users[index].email,
                name = users[index].name,
                idade = users[index].idade,
                data = users[index].data,
                password = users[index].password,
                cpf = users[index].cpf,
                admin = users[index].admin

            } = await req.body
        try {
            users[index] = { email, name, idade, password, admin, data, cpf }
            return res.json(users)
        } catch (error) {
            return res.sendStatus(400)
        }
    })

    // deleta
    app.delete('/delete/:index', (req, res) => {
        const { index } = req.params
        try {
            for (let i = 0; i < users.length; i++) {
                if (index == users[i].id) {
                    users.splice(i, 1)
                    return res.json(users)
                }
            }
        } catch (error) {
            return res.sendStatus(400)
        }
    })
    return app;
}
