const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

//get all workout
const getWorkouts = async(req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1}) //blank curly braces means get all 
                                                                //-1 means in descending orders
    res.status(200).json(workouts)
}
//get a single workout
const getWorkout = async(req,res) => {
    const {id} = req.params //give the id that we type to the request address bar of the params

    if(!mongoose.Types.ObjectId.isValid(id))//to avoid errror, check whether the id that we get valid for mongodb id
    {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    return res.status(200).json(workout)
}

//create new workout
const createWorkout = async(req,res) => {
    const{title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps}) //this is async, need async and await
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a workout
const deleteWorkout = async(req,res) => {
    const {id} = req.params //give the id that we type to the request address bar of the params

    if(!mongoose.Types.ObjectId.isValid(id))//to avoid errror, check whether the id that we get valid for mongodb id
    {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: "No such workout, nothing changes"})
    }
    return res.status(200).json(workout)
}

//update a workout
const updateWorkout = async(req,res) => {
    const {id} = req.params //give the id that we type to the request address bar of the params

    if(!mongoose.Types.ObjectId.isValid(id))//to avoid errror, check whether the id that we get valid for mongodb id
    {
        return res.status(404).json({error: "No such workout"})
    }

    //first parameter is the criteria for the object to find
    //the second is the updated values
    //triple dot means spread the parameters
    //return the old value
    const workout = await Workout.findOneAndUpdate({_id: id}, 
    {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: "No such workout, nothing changes"})
    }
    return res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout, 
    deleteWorkout,
    updateWorkout
}