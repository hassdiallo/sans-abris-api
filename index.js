const express = require("express")
const app = express()
const cors = require('cors')
const apiPort = 5000
const connectDB = require("./config/data")
const sdfRouter = require("./routes/sdf.route")
const bodyParser = require('body-parser')

connectDB()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('SDF app API !!!')
})

app.use('/sdf', sdfRouter)


app.listen(apiPort, () => console.log(`Le serveur est démarré sur le port ${apiPort}`))