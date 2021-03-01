const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.porkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
}) //root 디렉토리에 오면 Hello World를 출력하겠다.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})