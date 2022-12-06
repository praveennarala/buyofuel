const express = require('express')
const app = express()
const connectDb = require("./db/connect")
const Task = require('./models/Task')

app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const newTask = new Task(req.body)
  newTask.save()
  res.send("Task uploaded")
})

app.get('/', (req, res) => {
  Task.find({}, (error, tasks) => {
    if (error) {
      console.log(error)
    } else {
      res.send(tasks)
    }
  })
})

const dbURL = "" // add db url here
connectDb(dbURL)

app.listen(4040, console.log("Server is listening"))