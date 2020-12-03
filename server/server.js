const express = require('express')

const authRoutes = require('./routes/auth')
const patientRoutes = require('./routes/patients')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
server.use('/api/v1/patients', patientRoutes)

module.exports = server
