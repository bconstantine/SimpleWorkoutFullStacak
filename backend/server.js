require('dotenv').config() //directly attach the env to the process object
const express = require("express")

//create express app
const app = express()
const mongoose = require("mongoose")
const routes = require("./routes/workouts")

//global middleware, will trigger for every request
app.use(express.json()) //every request that come will look at the json object whether there exist body,
                        //if it exists, then the body will be attached it to the request handler

//next is needed for the next middleware (e.g. the welcome to the app get)
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

//use the routes imported from the routes
//if no path specified, then it will follow the routes provided inside the workouts.js
//if we add additional path, eg. api/workouts, then it will connect to api/workouts/{defined}
app.use('/api/workouts', routes)

//route handler for get (arriving)
// / means is the localhost:port
/* app.get('/', (req, res) =>{
    res.json({mssg: "Welcome to the app"})
})
 */

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, ()=>{
            console.log(`connected to db and port is listening in ${process.env.PORT}!`)
        })
    }
    )
    .catch((error) => {
        console.log(error)
    })