const Model = require("./model.tricks")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tricks', async (req, res) => {
  const result = (await Model.find({}))
  res.json(result)
})

app.post('/grades', async (req, res) => {
  // const user = (req.params.user) ? req.params.user : "UserTest"
  const data = req.body
  console.log(data.user, {data})
  if (data.val !== "") {
    const result = await Model.updateOne({_id: data.id}, { $push: { grades: Number(data.val) } })
    console.log(result)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})