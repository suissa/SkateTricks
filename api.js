const Model = require("./model.tricks")
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tricks', async (req, res) => {
  const result = (await Model.find({}))
  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})