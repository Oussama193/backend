const express=require("express")
const cors=require("cors")
const app=express()
const connectDB=require("./config/connectDB")

//middleware
app.use(express.json())
app.use(cors())

//database connection
connectDB()

//routes
app.use("/facebook",require("./routes/accounts"))

const PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`connected PORT${PORT}`))
