require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routers/workouts')
const app=express()
app.use(express.json())
app.use("/api/workouts",workoutRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT)
})
})
.catch((error)=>{
    console.log(error)
})
