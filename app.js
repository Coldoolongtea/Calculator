const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

//Connect to DB
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("connected to DB!"); })

const opperationsRoute =  require("./routes/opperations")

app.get('/', (req,res)=>{res.send("We are home!")})
app.use('/nombres',opperationsRoute)

//Start listening to the server
app.listen(3000);