const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()


const corsOptions = {
  origin: 'http://localhost:5173', // Permitir este domínio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permitir cookies
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions))
app.use(express.json())

app.use(routes)

module.exports = app;
  
  