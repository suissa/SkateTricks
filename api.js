const Model = require("./model.tricks")
const Users = require("./model.users")
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

const getusers = () => Users.find({})
const finduser = (user, users) => !!users.find(u => u.name === user.toLowerCase())

app.post('/grades', async (req, res) => {
  // const user = (req.params.user) ? req.params.user : "UserTest"
  const data = req.body
  const users = await getusers()
  const findeduser = finduser(data.user, users)
  console.log(data.user, {data}, {users}, {findeduser})
  // if (data.val !== "") {
  //   const result = await Model.updateOne({_id: data.id}, { $push: { grades: Number(data.val) } })
  //   console.log(result)
  // }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})