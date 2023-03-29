require('dotenv').config()

const cors = require('cors')

const express = require("express")
const app = express()

app.use(cors())

const patientMethods = require('./routes/patientMethods')

const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`
console.log(databaseUrl)

const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send("API rodando" + databaseUrl)
})

app.get('/patients', async (req, res) => {
    await patientMethods.getAllPatients(req, res);
  })

app.listen(port, () => {
    console.info(`Aplicação rodando em http://34.122.114.73:${port}`)
})