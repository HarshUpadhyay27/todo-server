const express = require("express");
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.use("/api", require('./route/taskRoute'))

mongoose.connect('mongodb://localhost:27017/task-api', (err)=>{
    if(err) throw err;
    console.log('connection sucessfully')
})

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
