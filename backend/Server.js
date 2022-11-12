const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
  require("dotenv").config()


const app = express()

const port = process.env.PORT || 6000
const route = require("./routes/TodoRoute")



app.use(express.json())
 
    mongoose
      .connect("process.env.MONGODB_URL")
    .then(() => {
      console.log("MongoDb is connected..")  
    }).catch((err) => {
        console.log(err)
    }); 


    app.use(route)

app.listen(port, () => console.log(`server running on ${port}`))




