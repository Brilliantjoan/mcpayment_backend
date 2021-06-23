const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.Port || 5001

const route = require('./routers/route')

app.use(cors())

app.use(express.json({ extended: false }))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/', route)

app.listen(port, () => {
  console.log(`App running on PORT: ${port}`)
})