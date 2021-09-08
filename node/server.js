const app = require('./config')()

app.listen(app.get('port'), () => {
    console.log(`Server iniciado na porta ${app.get('port')}`)
})